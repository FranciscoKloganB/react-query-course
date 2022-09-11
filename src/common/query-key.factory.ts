import type { IssueStatus } from "@enums"

export const QKF = {
  issues: ["issues"] as const,
  issueComments: (issueNum: string | number) =>
    [...QKF.issueDetail(issueNum), "comments"] as const,
  issueDetail: (num: string | number) =>
    [...QKF.issues, num.toString()] as const,
  issuesFiltered: (labels: string[], status?: IssueStatus) =>
    [...QKF.issues, { labels, status }] as const,
  issuesSearched: (search: string) =>
    [...QKF.issues, "search", search] as const,
  labels: ["labels"] as const,
  users: ["users"] as const,
  userDetails: (id: string) => [...QKF.users, id] as const
}
