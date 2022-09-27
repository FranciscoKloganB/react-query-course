import { Fragment, useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import {
  IssueStatus,
  isIssueStatusResetter,
  issueStatusAsSelectGroup
} from "@enums"
import { useGetIssueDetail, useUpdateIssueDetail } from "@hooks"
import { Label } from "@rdx/label"
import { Select, SelectGroup } from "@ui"

import { Subtitle } from "./styled"

const placeholder = (
  <div className="w-full md:w-56 2xl:w-64 h-9 animate-pulse rounded bg-slate-600" />
)

function buildIssueProgressStatuses() {
  const options = issueStatusAsSelectGroup()

  return {
    label: options.label,
    items: options.items.filter((i) => !isIssueStatusResetter(i.display))
  }
}

export function IssueEdit() {
  const [selectedStatus, setSelectedStatus] = useState<IssueStatus>()
  const { number = "" } = useParams()

  const group = useMemo(() => buildIssueProgressStatuses(), [])

  const issueQuery = useGetIssueDetail(number)
  const issueDetailEditor = useUpdateIssueDetail(number)

  function handleSelection(enumKey: string) {
    const newStatus = IssueStatus[enumKey as keyof typeof IssueStatus]

    setSelectedStatus(newStatus)

    issueDetailEditor.mutate(newStatus)
  }

  if (issueQuery.isError) {
    return null
  }

  if (issueQuery.isLoading) {
    return placeholder
  }

  return (
    <Fragment>
      <Label htmlFor="change issue status">
        <Subtitle>Status</Subtitle>
      </Label>
      <Select
        id="change issue status"
        defaultValue={selectedStatus}
        placeholder="Change issue status"
        onValueChange={handleSelection}
      >
        <div key={group.label}>
          <SelectGroup group={group} />
        </div>
      </Select>
    </Fragment>
  )
}
