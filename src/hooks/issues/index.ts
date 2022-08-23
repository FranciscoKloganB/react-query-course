import { useQuery } from "react-query"

export function useIssues({ labels }: { labels: string[] }) {
  const keys = ["issues", { labels }]

  function fetcher(): Promise<Issue[]> {
    console.log("Label Filters", labels)
    const queryString = labels.map((label) => `labels[]=${label}`).join("&")

    return fetch(`api/issues?${queryString}`)
      .then((res) => res.json())
      .then((data) =>
        data.map((dto: IssueDto) => ({
          labelIDs: dto.labels,
          ...dto
        }))
      )
  }

  return useQuery(keys, fetcher)
}
