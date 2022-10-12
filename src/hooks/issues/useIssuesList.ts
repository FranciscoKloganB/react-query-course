import { useQuery, useQueryClient } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { IssueStatus } from "@enums"

import { setIssue } from "./detail"
import { toDomainIssue } from "./toDomainIssue"

function fetchIssuesList(
  queryString: string,
  queryClient: QueryClient,
  signal?: AbortSignal
) {
  return baseClient<IssueDto[]>(`/api/issues?${queryString}`, { signal }).then(
    (data) => {
      const issues = data.map((dto) => toDomainIssue(dto))

      /** Prefills issue details header section with real data */
      issues.forEach((issue) => setIssue(queryClient, issue))

      return issues
    }
  )
}

function useIssuesList({
  labels,
  status
}: {
  labels: string[]
  status?: IssueStatus
}) {
  const queryClient = useQueryClient()

  return useQuery(QKF.issuesFiltered(labels, status), ({ signal }) => {
    let queryString = labels.map((label) => `labels[]=${label}`).join("&")

    if (status) {
      queryString += `&status=${status}`
    }

    return fetchIssuesList(queryString, queryClient, signal)
  })
}

export { fetchIssuesList, useIssuesList }
