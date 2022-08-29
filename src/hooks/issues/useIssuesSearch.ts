import { useQuery } from "react-query"
import { toDomainIssue } from "./toDomainIssue"

export function useIssuesSearch(searchValue: string) {
  const keys = ["issues", "search", searchValue]

  function fetcher(): Promise<Issue[]> {
    return fetch(`/api/search/issues?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => data.map((dto: IssueDto) => toDomainIssue(dto)))
  }

  const query = useQuery(keys, fetcher, { enabled: !!searchValue })

  /**
   * fetchStatus === idle means the query is not trying to get new data
   *  When isLoading is `true`, the query is trying to get data, but has no data currently
   *  When isLoading is `false`, it means the query is either in success or error state
   */
  const isDisabled = query.fetchStatus === "idle" && query.isLoading === false
  const isEnabled = query.fetchStatus === "idle" && query.isLoading === true

  return { isDisabled, isEnabled, ...query }
}
