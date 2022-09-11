import IssuesList from "@components/IssuesList"
import { Subtitle, Title } from "@styled"
import { useMemo, useState } from "react"
import LabelsFilteringChips from "@components/LabelsFilteringChips"
import { Select, Tooltip } from "@ui"
import { isIssueStatusFilterReset, IssueStatus } from "@enums"

import { sentenceCase } from "change-case"

function buildIssueProgressStatuses() {
  return [
    {
      label: "issue status",
      items: [
        ...Object.keys(IssueStatus).map((key) => ({
          display: sentenceCase(IssueStatus[key as keyof typeof IssueStatus]),
          value: key
        }))
      ]
    }
  ]
}

export default function Issues() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<IssueStatus>()

  const groups = useMemo(() => buildIssueProgressStatuses(), [])

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
        isIssueStatusFilterReset(newStatus) ? undefined : newStatus
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
    <div>
      <main className="grid lg:grid-cols-[75%_25%]">
        <aside className="lg:order-last lg:ml-6 xl:ml-12">
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
            groups={groups}
            defaultValue={selectedStatus}
            onValueChange={handleStatusSelection}
          />
        </aside>
        <section className="pt-4 lg:pt-0">
          <Title>Issues</Title>
          <IssuesList
            filterByLabels={selectedLabels}
            filterByStatus={selectedStatus}
          />
        </section>
      </main>
    </div>
  )
}
