import { Fragment } from "react"
import { useParams } from "react-router-dom"

import { IssueStatus } from "@enums"
import { useGetIssueDetail, usePatchIssueDetail } from "@hooks"
import { Label } from "@rdx/label"
import { Subtitle } from "@styled"

import { IssueEditAssignee } from "./IssueEditAssignee"
import { IssueEditLabels } from "./IssueEditLabels"
import { IssueEditStatus } from "./IssueEditStatus"

const placeholder = (
  <div className="w-full md:w-56 2xl:w-64 h-9 animate-pulse rounded bg-slate-600" />
)

export function IssueEdit() {
  const { number = "" } = useParams()

  const issueGetQuery = useGetIssueDetail(number)
  const issuePatchMutation = usePatchIssueDetail(number)

  if (issueGetQuery.isLoading) {
    return placeholder
  }

  if (issueGetQuery.isError) {
    return null
  }

  const labelIds = issueGetQuery.data.labelIDs

  function handleStatusChange(key: string) {
    issuePatchMutation.mutate({
      status: IssueStatus[key as keyof typeof IssueStatus]
    })
  }

  function handleAssigneeChange(assigneeId: string) {
    issuePatchMutation.mutate({ assignee: assigneeId })
  }

  function handleLabelChange(id: string) {
    issuePatchMutation.mutate({
      labels: labelIds.includes(id)
        ? labelIds.filter((labelId) => labelId !== id)
        : labelIds.concat(id)
    })
  }

  return (
    <Fragment>
      <IssueEditStatus onStatusSelect={handleStatusChange} />
      <IssueEditAssignee
        assigneeId={issueGetQuery.data.assignee}
        onAssigneeSelect={handleAssigneeChange}
      />
      <Label htmlFor="change labels">
        <Subtitle>Labels</Subtitle>
      </Label>
      <IssueEditLabels activeIds={labelIds} onLabelClick={handleLabelChange} />
    </Fragment>
  )
}
