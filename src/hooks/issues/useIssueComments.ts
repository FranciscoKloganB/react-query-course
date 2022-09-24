import { useQuery } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"

function fetchIssueComments(number: string | number, signal?: AbortSignal) {
  return baseClient<UserComment[]>(`/api/issues/${number}/comments`, { signal })
}

function useIssueComments(number: string | number) {
  return useQuery(QKF.issueComments(number), ({ signal }) =>
    fetchIssueComments(number, signal)
  )
}

export { fetchIssueComments, useIssueComments }
