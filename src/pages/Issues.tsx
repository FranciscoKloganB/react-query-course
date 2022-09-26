import { Fragment, useMemo, useState } from "react"

import IssuesList from "@components/IssuesList"
import LabelsFilteringChips from "@components/LabelsFilteringChips"
import { IssueStatus, isIssueStatusResetter } from "@enums"
import { issueStatusAsSelectGroup } from "@enums"
import { BaseLayout } from "@layouts"
import { Subtitle, Title } from "@styled"
import { Select, SelectGroup, Tooltip } from "@ui"

export default function Issues() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<IssueStatus>()

  const group = useMemo(() => issueStatusAsSelectGroup(), [])

  function handleLabelToggle(label: string) {
    setSelectedLabels((currentLabels) =>
      currentLabels.includes(label)
        ? currentLabels.filter((currentLabel) => currentLabel !== label)
        : currentLabels.concat(label)
    )
  }

  function handleStatusSelection(enumKey: string) {
    const newStatus = IssueStatus[enumKey as keyof typeof IssueStatus]

    if (newStatus) {
      setSelectedStatus(
        isIssueStatusResetter(newStatus) ? undefined : newStatus
      )
    } else {
      console.error(
        "Issues page could not filter issues by status because of invalid selection",
        enumKey,
        newStatus
      )
    }
  }

  return (
    <BaseLayout
      aside={
        <Fragment>
          <Tooltip message="Click the label chips to toggle filter by their name">
            <Subtitle>Labels</Subtitle>
          </Tooltip>
          <LabelsFilteringChips
            className="mt-2 justify-center gap-x-2 gap-y-3 md:justify-start"
            selected={selectedLabels}
            toggle={handleLabelToggle}
          />
          <Subtitle>Status</Subtitle>
          <Select
            ariaLabel="Issue label filters"
            placeholder="Filter issues"
            defaultValue={selectedStatus}
            onValueChange={handleStatusSelection}
          >
            <div key={group.label}>
              <SelectGroup group={group} />
            </div>
          </Select>
        </Fragment>
      }
      content={
        <Fragment>
          <Title>Issues</Title>
          <IssuesList
            filterByLabels={selectedLabels}
            filterByStatus={selectedStatus}
          />
        </Fragment>
      }
    />
  )
}
