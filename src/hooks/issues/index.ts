import { useQuery } from "react-query"

/**
 * Gets data for labels from GitHub API
 *
 * When given a configuration object with `labels` key, it transforms the given array
 * into a CSV of query parameters. Resulting in the retrieval of issues that include at least
 * one of the provided labels.
 *
 * Note that `labels` is an array of `label.name`, whereas the returned `issue.labels` is an array
 * of `label.id`. This is intended, because it these are the DTOs that GitHub API expects.
 *
 * Transforming GitHub DTO to include the label names is not viable since it would involve making
 * extra requests.
 */
export function useIssues({ labels }: { labels: string[] }) {
  const keys = ["issues", { labels }]

  function fetcher(): Promise<Issue[]> {
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
