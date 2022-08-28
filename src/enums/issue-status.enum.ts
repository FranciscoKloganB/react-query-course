export enum IssueStatus {
  BACKLOG = "backlog",
  CANCELLED = "cancelled",
  CLOSED = "closed",
  DONE = "done",
  IN_PROGRESS = "inProgress",
  TODO = "todo"
}

export function isOpenIssue(status: string | IssueStatus) {
  return [IssueStatus.BACKLOG, IssueStatus.TODO, IssueStatus.IN_PROGRESS].includes(
    status as IssueStatus
  )
}

export function isClosedIssue(status: IssueStatus) {
  return !isOpenIssue(status)
}
