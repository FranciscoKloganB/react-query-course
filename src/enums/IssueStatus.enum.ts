export enum IssueStatus {
  BACKLOG = "backlog",
  CANCELLED = "cancelled",
  CLOSED = "closed",
  DONE = "done",
  IN_PROGRESS = "inProgress",
  TODO = "todo"
}

export function isClosedIssue(status: string) {
  return status === IssueStatus.DONE || IssueStatus.CANCELLED
}
