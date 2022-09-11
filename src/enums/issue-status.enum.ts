export enum IssueStatus {
  /**
   * FIXME:
   *  Since `@radix/select` controlled value prop is bugged and we can't reset state
   *  in uncontrolled mode, we needed to add `__CLEAR_FILTER__`.
   */
  __CLEAR_FILTER__ = "show all statuses",
  BACKLOG = "backlog",
  CANCELLED = "cancelled",
  CLOSED = "closed",
  DONE = "done",
  IN_PROGRESS = "inProgress",
  TODO = "todo"
}

export function isIssueStatusFilterReset(status: IssueStatus) {
  return IssueStatus.__CLEAR_FILTER__ === status
}

export function isOpenIssue(status: IssueStatus) {
  return [IssueStatus.BACKLOG, IssueStatus.TODO, IssueStatus.IN_PROGRESS].includes(status)
}

export function isClosedIssue(status: IssueStatus) {
  return !isOpenIssue(status)
}
