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
    onMutate: (newData: Partial<Issue>) => {
      // Get cached data at the moment this mutation starts
      const oldData = queryClient.getQueryData<Issue>(queryKey)

      queryClient.setQueryData(queryKey, (cached) => ({
        ...(cached ?? {}),
        ...newData
      }))

      return () => {
        queryClient.setQueryData(queryKey, (cached) => {
          // If there was cached data when the mutation started, merge with current cache
          if (oldData) {
            // Get key value pairs from old data for each field changed by the mutation
            const data: Record<string, unknown> = {}
            Object.keys(newData).forEach((key) => {
              data[key] = oldData[key as keyof Issue]
            })

            return {
              ...(cached ?? {}),
              ...data
            }
          }

          // Just return whatever is cached currently
          return cached
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
