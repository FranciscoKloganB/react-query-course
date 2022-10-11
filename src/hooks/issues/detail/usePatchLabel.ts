import { useMutation, useQueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"

import { toDomainIssue } from "../toDomainIssue"

const patchIssue = (number: number | string, data: unknown) =>
  baseClient<IssueDto>(`/api/issues/${number}`, {
    method: "PUT",
    data
  }).then((dto) => toDomainIssue(dto))

function usePatchLabel(number: number | string) {
  const queryKey = QKF.issueDetail(number)
  const queryClient = useQueryClient()

  return useMutation((data) => patchIssue(number, data), {
    onMutate: (labelID: string) => {
      // Get cached data at the moment this mutation starts
      const oldLabels =
        queryClient.getQueryData<Issue>(queryKey)?.labelIDs ?? []

      const futureLabels = oldLabels.includes(labelID)
        ? oldLabels.filter((id) => id !== labelID)
        : oldLabels.concat(labelID)

      // Performs an optimistic update
      queryClient.setQueryData(
        queryKey,
        (cached: Partial<Issue> | undefined) => {
          return {
            ...(cached ?? {}),
            labelIDs: futureLabels
          }
        }
      )

      // Provides a rollback function for onError
      return () => {
        queryClient.setQueryData(queryKey, (cached: Issue | undefined) => {
          // If there was cached data when the mutation started, merge with current cache
          if (cached) {
            const rollbackLabels = oldLabels.includes(labelID)
              ? cached.labelIDs.concat(labelID)
              : cached.labelIDs.filter((id) => id !== labelID)

            return {
              ...cached,
              labelIDs: rollbackLabels
            }
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

export { usePatchLabel as usePatchIssueLabel }
