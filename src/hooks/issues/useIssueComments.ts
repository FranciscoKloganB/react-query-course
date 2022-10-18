import { useInfiniteQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

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

/**
 * When data is available, pages will contain an issue's users' comments.
 *
 * When `controlledPagination` is set to false (default), and the returned
 * `React.useRefs` (`previousLoaderRef` and/or `nextLoaderRef`) are attributed
 * to an HTML element, then, the hook automatically fetches next and/or previous
 * pages as those elements enter the browser viewport.
 */
function useIssueComments(
  number: string | number,
  controlledPagination = false
) {
  const [nextRef, nextVisible] = useInView()
  const [previousRef, previousVisible] = useInView()

  const infiniteQuery = useInfiniteQuery(
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

  useEffect(() => {
    if (controlledPagination) {
      return
    }

    if (previousVisible) {
      infiniteQuery.fetchPreviousPage()
    } else if (nextVisible) {
      infiniteQuery.fetchNextPage()
    }
  }, [controlledPagination, previousVisible, nextVisible])

  const shouldShowFetchingNext =
    infiniteQuery.isFetchingNextPage && !infiniteQuery.isLoading
  const shouldShowFetchingPrevious =
    infiniteQuery.isFetchingPreviousPage && !infiniteQuery.isLoading

  return {
    infiniteQuery,
    nextRef,
    previousRef,
    shouldShowFetchingNext,
    shouldShowFetchingPrevious
  }
}

export { fetchIssueComments, useIssueComments }
