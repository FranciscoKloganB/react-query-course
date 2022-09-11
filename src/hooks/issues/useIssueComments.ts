import { QKF } from "@common/query-key.factory"
import { baseClient } from "@clients"
import { useQuery } from "@tanstack/react-query"

function fetchIssueComments(number: string | number, signal?: AbortSignal) {
  return baseClient<UserComment[]>(`/api/issues/${number}/comments`, { signal })
}

function useIssueComments(number: string | number) {
  return useQuery(QKF.issueComments(number), ({ signal }) =>
    fetchIssueComments(number, signal)
  )
}

export { fetchIssueComments, useIssueComments }
