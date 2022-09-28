import { Fragment, useMemo } from "react"
import { useParams } from "react-router-dom"

import {
  IssueStatus,
  isIssueStatusResetter,
  issueStatusAsSelectGroup
} from "@enums"
import { useUpdateIssueDetail } from "@hooks"
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
  const { number = "" } = useParams()

  const group = useMemo(() => buildIssueProgressStatuses(), [])

  const issueDetailEditor = useUpdateIssueDetail(number)

  function handleSelection(key: string) {
    issueDetailEditor.mutate(IssueStatus[key as keyof typeof IssueStatus])
  }

  return (
    <Fragment>
      <Label htmlFor="change issue status">
        <Subtitle>Status</Subtitle>
      </Label>
      <Select
        id="change issue status"
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
