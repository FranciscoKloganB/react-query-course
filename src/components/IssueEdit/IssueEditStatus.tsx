import { useMemo } from "react"

import { isIssueStatusResetter, issueStatusAsSelectGroup } from "@enums"
import { Label } from "@rdx/label"
import { Subtitle } from "@styled"
import { Select, SelectGroup } from "@ui"

type IssueEditStatusProps = {
  onStatusSelect: (value: string) => void
}

function buildIssueProgressStatuses() {
  const options = issueStatusAsSelectGroup()

  return {
    label: options.label,
    items: options.items.filter((i) => !isIssueStatusResetter(i.display))
  }
}

export function IssueEditStatus({ onStatusSelect }: IssueEditStatusProps) {
  const group = useMemo(() => buildIssueProgressStatuses(), [])

  return (
    <div>
      <Label htmlFor="change issue status">
        <Subtitle>Status</Subtitle>
      </Label>
      <Select
        id="change issue status"
        placeholder="Change issue status"
        onValueChange={onStatusSelect}
      >
        <div key={group.label}>
          <SelectGroup group={group} />
        </div>
      </Select>
    </div>
  )
}
