import { useQuery } from "react-query"
import { toDomainIssue } from "./toDomainIssue"

export function useIssuesSearch({ titleQuery }: { titleQuery: string }) {
  const keys = ["search", "issues", { query: titleQuery }]

  function fetcher(): Promise<Issue[]> {
    return fetch(`/api/search/issues?q=${titleQuery}`)
      .then((res) => res.json())
      .then((data) => data.map((dto: IssueDto) => toDomainIssue(dto)))
  }

  return useQuery(keys, fetcher)
}
