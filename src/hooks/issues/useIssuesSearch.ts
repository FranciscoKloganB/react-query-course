import { useQuery } from "react-query"
import { toDomainIssue } from "./toDomainIssue"

export function useIssuesSearch(searchValue: string) {
  const keys = ["issues", "search", searchValue]

  function fetcher(): Promise<Issue[]> {
    return fetch(`/api/search/issues?q=${searchValue}`)
      .then((res) => res.json())
      .then((data) => data.map((dto: IssueDto) => toDomainIssue(dto)))
  }

  return useQuery(keys, fetcher, { enabled: !!searchValue })
}
