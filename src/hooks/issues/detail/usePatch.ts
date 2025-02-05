import { useMutation, useQueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"

import { toDomainIssue } from "../toDomainIssue"

const patchIssue = (number: number | string, data: unknown) =>
  baseClient<IssueDto>(`/api/issues/${number}`, {
    method: "PUT",
    data
  }).then((dto) => toDomainIssue(dto))

function usePatch(number: number | string) {
  const queryKey = QKF.issueDetail(number)
  const queryClient = useQueryClient()

  return useMutation((data) => patchIssue(number, data), {
    onMutate: (data: Partial<IssueDto>) => {
      // Get cached data at the moment this mutation starts
      const oldIssue = queryClient.getQueryData<Issue>(queryKey)

      // Performs an optimistic update
      queryClient.setQueryData(queryKey, (cached: Issue | undefined) => {
        if (cached) {
          return {
            ...cached,
            ...data,
            labels: data.labels ?? cached.labelIDs
          }
        }
      })

      // Provides a rollback function for onError
      return () => {
        queryClient.setQueryData(queryKey, (cached: Issue | undefined) => {
          // If there was cached data when the mutation started, merge with current cache
          if (oldIssue) {
            if (cached) {
              return {
                ...cached,
                ...oldIssue
              }
            }

            return oldIssue
          }
        })
      }
    },
    onError: (_error, _variables, rollback) => {
      rollback?.()
    },
    onSettled: (_error, _variables) => {
      queryClient.invalidateQueries(queryKey, { exact: true })
    }
  })
}

export { usePatch as usePatchIssueDetail }
