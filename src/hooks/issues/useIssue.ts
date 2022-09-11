import { baseClient } from "@clients"
import { seconds } from "@helpers"
import { useQuery } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"

import type { QueryClient } from "@tanstack/react-query"
import { QKF } from "@/src/common/query-key.factory"

export function setIssue(client: QueryClient, issue: Issue) {
  client.setQueryData(QKF.issueDetail(issue.number.toString()), issue)
}

export function useIssue(number: string) {
  return useQuery(
    QKF.issueDetail(number),
    ({ signal }) =>
      baseClient<IssueDto>(`/api/issues/${number}`, { signal }).then((dto) => toDomainIssue(dto)),
    { staleTime: seconds(30) }
  )
}
