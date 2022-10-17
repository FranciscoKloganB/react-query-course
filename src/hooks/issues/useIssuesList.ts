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

type UseIssuesListProps = {
  labels: string[]
  status?: IssueStatus
  page?: number
  perPage?: number
  queryConfig?: Record<string, unknown>
}

function useIssuesList({
  labels,
  status,
  page,
  perPage,
  queryConfig = {}
}: UseIssuesListProps) {
  const queryClient = useQueryClient()

  return useQuery(
    QKF.issuesFiltered(labels, status, page, perPage),
    ({ signal }) => {
      let queryString = labels.map((label) => `labels[]=${label}`).join("&")

      if (status) {
        queryString += `&status=${status}`
      }

      if (page) {
        queryString += `&page=${page}`

        if (perPage) {
          queryString += `&per_page=${perPage}`
        }
      }

      return fetchIssuesList(queryString, queryClient, signal)
    },
    {
      keepPreviousData: true,
      ...queryConfig
    }
  )
}

export { fetchIssuesList, useIssuesList }
