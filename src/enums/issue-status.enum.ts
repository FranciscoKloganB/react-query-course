import { sentenceCase } from "change-case"

import { getEnumKeys } from "@helpers/getEnumKeys"

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

export function isIssueStatusResetter(value: string) {
  return IssueStatus.__CLEAR_FILTER__ === value.toLowerCase()
}

export function isOpenIssue(status: IssueStatus) {
  return [
    IssueStatus.BACKLOG,
    IssueStatus.TODO,
    IssueStatus.IN_PROGRESS
  ].includes(status)
}

export function isClosedIssue(status: IssueStatus) {
  return !isOpenIssue(status)
}

export function issueStatusAsSelectGroup(label = "issue status") {
  return {
    label,
    items: getEnumKeys(IssueStatus).map((key) => ({
      value: key,
      display: sentenceCase(IssueStatus[key])
    }))
  }
}
