import { useQuery, useQueryClient } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { seconds } from "@helpers"

import { toDomainIssue } from "./toDomainIssue"
import { setIssue } from "./useIssueDetail"

function fetchIssuesSearch(
  search: string,
  client: QueryClient,
  signal?: AbortSignal
) {
  return baseClient<SearchOf<IssueDto>>(`/api/search/issues?q=${search}`, {
    signal
  }).then((data) => {
    const searchResult = {
      count: data.count,
      items: data.items.map((dto: IssueDto) => toDomainIssue(dto))
    }

    searchResult.items.forEach((issue) => setIssue(client, issue))

    return searchResult
  })
}

function useIssuesSearch(search: string) {
  const queryClient = useQueryClient()

  const query = useQuery(
    QKF.issuesSearched(search),
    ({ signal }) => fetchIssuesSearch(search, queryClient, signal),
    { enabled: !!search, staleTime: seconds(15) }
  )

  /**
   * `fetchStatus` informs us of the results of our query's requests whereas `status` tells about
   * the results of our query. It is important to note that as soon as `data` isLoaded `fetchStatus`
   * always goes back to being `idle`.
   *
   * Note that the fetching state is different from the loading state. A query only has the
   * loading state the first time it loads and there's no data, while the fetching state is used
   * by the query cache any time a query is refetched, including the first time.
   */

  // Query does not need to run (the query is disabled or already has `data`)
  const isIdle = query.fetchStatus === "idle"
  // Not currently fetching and we do not have `data`, sure sign the query is disabled
  const isDisabled = query.fetchStatus === "idle" && query.status === "loading"
  // Query is attempting to obtain new `data`
  const isLoading =
    query.fetchStatus === "fetching" && query.status === "loading"
  // Query is not currently working but has data to display (typescript incorrectly warns data might be undefined)
  const isComplete = query.fetchStatus === "idle" && query.status === "success"

  return { ...query, isIdle, isDisabled, isLoading, isComplete }
}

export { fetchIssuesSearch, useIssuesSearch }
