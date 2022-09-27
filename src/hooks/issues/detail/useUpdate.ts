import { IssueStatus } from "@/src/enums"
import { useMutation } from "@tanstack/react-query"

import { baseClient } from "@clients"

function useUpdate(number: string | number) {
  return useMutation((status: IssueStatus) =>
    baseClient<IssueDto>(`/api/issues/${number}`, {
      method: "PUT",
      data: { status }
    })
  )
}

export { useUpdate as useUpdateIssueDetail }
