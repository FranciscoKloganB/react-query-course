import { QKF } from "@common/query-key.factory"
import { baseClient } from "@clients"
import { IssueStatus } from "@enums"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"
import { setIssue } from "./useIssueDetail"

import type { QueryClient } from "@tanstack/react-query"

function fetchIssuesList(queryString: string, queryClient: QueryClient, signal?: AbortSignal) {
  return baseClient<IssueDto[]>(`/api/issues?${queryString}`, { signal }).then((data) => {
    const issues = data.map((dto) => toDomainIssue(dto))

    /** Prefills issue details header section with real data */
    issues.forEach((issue) => setIssue(queryClient, issue))

    return issues
  })
}

function useIssuesList({ labels, status }: { labels: string[]; status?: IssueStatus }) {
  const queryClient = useQueryClient()

  return useQuery(QKF.issuesFiltered(labels, status), ({ signal }) => {
    let queryString = labels.map((label) => `labels[]=${label}`).join("&")

    if (status) {
      queryString += `&status=${status}`
    }

    return fetchIssuesList(queryString, queryClient, signal)
  })
}

export { fetchIssuesList, useIssuesList as useIssues }
