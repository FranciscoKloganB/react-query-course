import { useQuery } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { seconds } from "@helpers"

import { toDomainIssue } from "../toDomainIssue"

function setIssue(client: QueryClient, issue: Issue) {
  client.setQueryData(QKF.issueDetail(issue.number), issue)
}

function fetchIssueDetail(number: string | number, signal?: AbortSignal) {
  return baseClient<IssueDto>(`/api/issues/${number}`, { signal }).then((dto) =>
    toDomainIssue(dto)
  )
}

function useGet(number: string | number) {
  return useQuery(
    QKF.issueDetail(number),
    ({ signal }) => fetchIssueDetail(number, signal),
    {
      staleTime: seconds(30)
    }
  )
}

export { fetchIssueDetail, setIssue, useGet as useGetIssueDetail }
