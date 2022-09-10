import { QKF } from "@/src/common/query-key.factory"
import { baseClient } from "@clients"
import { useQuery } from "@tanstack/react-query"

export function useIssueComments(number: string) {
  return useQuery(QKF.issueComments(number), ({ signal }) =>
    baseClient<UserComment[]>(`/api/issues/${number}/comments`, { signal })
  )
}
