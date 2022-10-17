import { useQuery, useQueryClient } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { IssueStatus } from "@enums"

import { setIssue } from "./detail"
import { toDomainIssue } from "./toDomainIssue"

type UseIssuesListProps = {
  labels: string[]
  status?: IssueStatus
  page?: number
  perPage?: number
  queryConfig?: Record<string, unknown>
}

function buildSearchParams({
  labels,
  status,
  page,
  perPage
}: Omit<UseIssuesListProps, "queryConfig">) {
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

  return queryString
}

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
  status,
  page,
  perPage,
  queryConfig = {}
}: UseIssuesListProps) {
  const queryClient = useQueryClient()

  return useQuery(
    QKF.issuesFiltered(labels, status, page, perPage),
    ({ signal }) =>
      fetchIssuesList(
        buildSearchParams({ labels, status, page, perPage }),
        queryClient,
        signal
      ),
    {
      keepPreviousData: true,
      onSettled: (data, _error) => {
        if (page && perPage && data && data.length === perPage) {
          const nextPage = page + 1

          return queryClient.prefetchQuery(
            QKF.issuesFiltered(labels, status, nextPage, perPage),
            ({ signal }) =>
              fetchIssuesList(
                buildSearchParams({ labels, status, page: nextPage, perPage }),
                queryClient,
                signal
              )
          )
        }
      },
      ...queryConfig
    }
  )
}

export { fetchIssuesList, useIssuesList }
