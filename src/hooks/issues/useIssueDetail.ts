import { baseClient } from "@clients"
import { seconds } from "@helpers"
import { useQuery } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"

import type { QueryClient } from "@tanstack/react-query"
import { QKF } from "@common/query-key.factory"

function setIssue(client: QueryClient, issue: Issue) {
  client.setQueryData(QKF.issueDetail(issue.number), issue)
}

function fetchIssueDetail(number: string | number, signal?: AbortSignal) {
  return baseClient<IssueDto>(`/api/issues/${number}`, { signal }).then((dto) => toDomainIssue(dto))
}

function useIssueDetail(number: string) {
  return useQuery(QKF.issueDetail(number), ({ signal }) => fetchIssueDetail(number, signal), {
    staleTime: seconds(30)
  })
}

export { fetchIssueDetail, setIssue, useIssueDetail }
