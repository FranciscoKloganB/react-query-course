import { Fragment } from "react"
import { useParams } from "react-router-dom"

import { IssueStatus } from "@enums"
import { useGetIssueDetail, useUpdateIssueDetail } from "@hooks"
import { Label } from "@rdx/label"
import { Subtitle } from "@styled"

import { IssueEditAssignee } from "./IssueEditAssignee"
import { IssueEditStatus } from "./IssueEditStatus"

const placeholder = (
  <div className="w-full md:w-56 2xl:w-64 h-9 animate-pulse rounded bg-slate-600" />
)

export function IssueEdit() {
  const { number = "" } = useParams()

  const issueGetQuery = useGetIssueDetail(number)
  const issueEditQuery = useUpdateIssueDetail(number)

  function handleSelection(key: string) {
    issueEditQuery.mutate(IssueStatus[key as keyof typeof IssueStatus])
  }

  return (
    <Fragment>
      <IssueEditStatus onStatusSelect={handleSelection} />
      <IssueEditAssignee assigneeId={issueGetQuery.data?.assignee} />
      <Label htmlFor="change labels">
        <Subtitle>Labels</Subtitle>
      </Label>
      <div className="flex space-x-3 lg:justify-between"></div>
    </Fragment>
  )
}
