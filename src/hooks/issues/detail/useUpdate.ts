import { useMutation, useQueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { IssueStatus } from "@enums"

function useUpdate(number: number | string) {
  const queryClient = useQueryClient()

  const queryKey = QKF.issueDetail(number)

  return useMutation(
    (status: IssueStatus) =>
      baseClient<IssueDto>(`/api/issues/${number}`, {
        method: "PUT",
        data: { status }
      }),
    {
      onMutate: (status) => {
        const oldData = queryClient.getQueryData<Issue>(queryKey)

        queryClient.setQueryData(queryKey, (data) => ({
          ...(data ?? {}),
          status
        }))

        return function rollback() {
          queryClient.setQueryData(queryKey, (data) => ({
            ...(data ?? {}),
            status: oldData?.status
          }))
        }
      },
      onError: (_error, _variables, rollback) => {
        rollback?.()
      },
      onSettled: (_error, _variables) => {
        queryClient.invalidateQueries(queryKey, { exact: true })
      }
    }
  )
}

export { useUpdate as useUpdateIssueDetail }
