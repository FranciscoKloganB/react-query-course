import { baseClient } from "@clients"
import { IssueStatus } from "@enums"
import { useQuery } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"

export function useIssues({ labels, status }: { labels: string[]; status?: IssueStatus }) {
  const keys = ["issues", { labels, status }]

  return useQuery(keys, ({ signal }) => {
    let queryString = labels.map((label) => `labels[]=${label}`).join("&")

    if (status) {
      queryString += `&status=${status}`
    }

    return baseClient<IssueDto[]>(`/api/issues?${queryString}`, { signal }).then((data) =>
      data.map((dto) => toDomainIssue(dto))
    )
  })
}
