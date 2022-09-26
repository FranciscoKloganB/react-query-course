import { useMemo, useState } from "react"
import { useParams } from "react-router-dom"

import {
  IssueStatus,
  isIssueStatusResetter,
  issueStatusAsSelectGroup
} from "@enums"
import { useIssueDetail } from "@hooks"
import { Select, SelectGroup } from "@ui"

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
  const issueQuery = useIssueDetail(number)

  const group = useMemo(() => buildIssueProgressStatuses(), [])

  function handleSelection(enumKey: string) {
    setSelectedStatus(IssueStatus[enumKey as keyof typeof IssueStatus])
  }

  if (issueQuery.isError) {
    return null
  }

  if (issueQuery.isLoading) {
    return placeholder
  }

  return (
    <Select
      ariaLabel="Change issue status"
      defaultValue={selectedStatus}
      placeholder="Change issue status"
      onValueChange={handleSelection}
    >
      <div key={group.label}>
        <SelectGroup group={group} />
      </div>
    </Select>
  )
}
