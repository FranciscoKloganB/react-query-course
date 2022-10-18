import { useInfiniteQuery } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"

function fetchIssueComments(
  number: string | number,
  pageParam: number,
  signal?: AbortSignal
) {
  return baseClient<UserComment[]>(
    `/api/issues/${number}/comments?page=${pageParam}`,
    { signal }
  )
}

function useIssueComments(number: string | number) {
  return useInfiniteQuery(
    QKF.issueComments(number),
    ({ signal, pageParam = 1 }) =>
      fetchIssueComments(number, pageParam, signal),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) {
          return
        }

        return pages.length + 1
      },
      getPreviousPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) {
          return
        }

        return pages.length - 1
      }
    }
  )
}

export { fetchIssueComments, useIssueComments }
