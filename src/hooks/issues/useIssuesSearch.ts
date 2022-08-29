import { useQuery } from "react-query"
import { toDomainIssue } from "./toDomainIssue"

export function useIssuesSearch(searchValue: string) {
  const keys = ["issues", "search", searchValue]

  function fetcher(): Promise<{ count: number; items: Issue[] }> {
    return fetch(`/api/search/issues?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => ({
        count: data.count,
        items: data.items.map((dto: IssueDto) => toDomainIssue(dto))
      }))
  }

  const query = useQuery(keys, fetcher, { enabled: !!searchValue })

  /**
   * `fetchStatus` informs us of the results of our query's requests whereas `status` tells about
   * the results of our query. It is important to note that as soon as `data` isLoaded `fetchStatus`
   * always goes back to being `idle`.
   */

  // Query does not need to run (the query is disabled or already has `data`)
  const isIdle = query.fetchStatus === "idle"
  // Not currently fetching and we do not have `data`, sure sign the query is disabled
  const isDisabled = query.fetchStatus === "idle" && query.status === "loading"
  // Query is attempting to obtain new `data`
  const isLoading = query.fetchStatus === "fetching" && query.status === "loading"
  // Query is not currently working but has data to display (typescript incorrectly warns data might be undefined)
  const isComplete = query.fetchStatus === "idle" && query.status === "success"

  return { ...query, isIdle, isDisabled, isLoading, isComplete }
}
