import { baseClient } from "@clients"
import { seconds } from "@helpers"
import { useQuery } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"

import type { QueryClient } from "@tanstack/react-query"

export function setIssue(client: QueryClient, issue: Issue) {
  client.setQueryData(["issues", "number", issue.number], issue)
}

export function useIssue(number: string) {
  const keys = ["issues", "number", number]

  return useQuery(
    keys,
    ({ signal }) =>
      baseClient<IssueDto>(`/api/issues/${number}`, { signal }).then((dto) => toDomainIssue(dto)),
    { staleTime: seconds(30) }
  )
}

const ctrl = new AbortController()
const signal = ctrl.signal
