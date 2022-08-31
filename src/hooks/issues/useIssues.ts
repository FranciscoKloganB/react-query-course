import { baseClient } from "@clients"
import { IssueStatus } from "@enums"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"
import { setIssue } from "./useIssue"

export function useIssues({ labels, status }: { labels: string[]; status?: IssueStatus }) {
  const queryClient = useQueryClient()
  const keys = ["issues", { labels, status }]

  return useQuery(keys, ({ signal }) => {
    let queryString = labels.map((label) => `labels[]=${label}`).join("&")

    if (status) {
      queryString += `&status=${status}`
    }

    return baseClient<IssueDto[]>(`/api/issues?${queryString}`, { signal }).then((data) => {
      const issues = data.map((dto) => toDomainIssue(dto))

      issues.forEach((issue) => setIssue(queryClient, issue))

      return issues
    })
  })
}
