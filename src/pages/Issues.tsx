import LabelChipButtons from "@/src/components/LabelChipButtons"
import { useMemo, useState } from "react"

import { FIRST_PAGE, PER_PAGE } from "@common/pagination"
import IssuesList from "@components/IssuesList"
import { IssueStatus, isIssueStatusResetter } from "@enums"
import { issueStatusAsSelectGroup } from "@enums"
import { BaseLayout } from "@layouts"
import { Label } from "@rdx/label"
import { Subtitle, Title } from "@styled"
import { Select, SelectGroup, Tooltip } from "@ui"

export default function Issues() {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<IssueStatus>()
  const [page, setPage] = useState<number>(FIRST_PAGE)

  const group = useMemo(() => issueStatusAsSelectGroup(), [])
  const gotoPageOne = () => setPage(FIRST_PAGE)

  function handleLabelToggle(label: string) {
    setSelectedLabels((currentLabels) =>
      currentLabels.includes(label)
        ? currentLabels.filter((currentLabel) => currentLabel !== label)
        : currentLabels.concat(label)
    )
    gotoPageOne()
  }

  function handleStatusSelection(enumKey: string) {
    const newStatus = IssueStatus[enumKey as keyof typeof IssueStatus]

    if (newStatus) {
      setSelectedStatus(
        isIssueStatusResetter(newStatus) ? undefined : newStatus
      )
      gotoPageOne()
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
        <div className="gap-y-3">
          <Tooltip message="Toggle the label chips to control which issues are displayed">
            <Subtitle>Labels</Subtitle>
          </Tooltip>
          <LabelChipButtons
            activeButtons={selectedLabels}
            toggle={handleLabelToggle}
          />
          <Label htmlFor="issue status filters">
            <Subtitle>Status</Subtitle>
          </Label>
          <Select
            id="issue status filters"
            placeholder="Showing all statuses"
            onValueChange={handleStatusSelection}
          >
            <div key={group.label}>
              <SelectGroup group={group} />
            </div>
          </Select>
        </div>
      }
      content={
        <>
          <Title>Issues</Title>
          <IssuesList
            filterByLabels={selectedLabels}
            filterByStatus={selectedStatus}
            page={page}
            perPage={PER_PAGE}
            setPage={setPage}
          />
        </>
      }
    />
  )
}
