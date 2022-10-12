import { useQuery, useQueryClient } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { seconds } from "@helpers"

import { setIssue } from "./detail"
import { toDomainIssue } from "./toDomainIssue"

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

  // Query is not currently working but has 'data' to display (typescript incorrectly warns 'data' might be undefined)
  const isComplete = query.fetchStatus === "idle" && query.status === "success"
  // Query is not currently fetching 'data' and we do not have `data` from previous fetch, sure sign the query is disabled
  const isDisabled = query.fetchStatus === "idle" && query.status === "loading"
  // Query does not need to run (the query is either disabled or if enabled already has `data`)
  const isIdle = query.fetchStatus === "idle"
  // Query is trying to obbtain new data, but it's doing so for the first time
  const isFirstFetching =
    query.fetchStatus === "fetching" && query.status === "loading"

  return {
    ...query,
    isIdle,
    isDisabled,
    isComplete,
    isFirstFetching
  }
}

export { fetchIssuesSearch, useIssuesSearch }
