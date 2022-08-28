import { IssueStatus } from "@enums"
import { useQuery } from "react-query"

const toDomainIssue = (dto: IssueDto): Issue => ({ labelIDs: dto.labels, ...dto })

export function useIssue(number: string) {
  const keys = ["issues", "number", number]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<Issue> {
    const [, , number] = queryKey

    return fetch(`/api/issues/${number}`)
      .then((res) => res.json())
      .then((dto) => toDomainIssue(dto))
  }

  return useQuery(keys, fetcher)
}

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
export function useIssues({ labels, status }: { labels: string[]; status?: IssueStatus }) {
  const keys = ["issues", { labels, status }]

  function fetcher(): Promise<Issue[]> {
    let queryString = labels.map((label) => `labels[]=${label}`).join("&")

    if (status) {
      queryString += `&status=${status}`
    }

    return fetch(`/api/issues?${queryString}`)
      .then((res) => res.json())
      .then((data) => data.map((dto: IssueDto) => toDomainIssue(dto)))
  }

  return useQuery(keys, fetcher)
}

export function useIssuesSearch({ titleQuery }: { titleQuery: string }) {
  const keys = ["search", "issues", { query: titleQuery }]

  function fetcher(): Promise<Issue[]> {
    return fetch(`/api/search/issues?q=${titleQuery}`)
      .then((res) => res.json())
      .then((data) => data.map((dto: IssueDto) => toDomainIssue(dto)))
  }

  return useQuery(keys, fetcher)
}
