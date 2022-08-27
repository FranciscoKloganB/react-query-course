import IssuesList from "@components/IssuesList"
import { Search as IssuesSearch } from "@/src/components/ui/Search"
import { Subtitle, Title, Tooltip, TooltipSpan } from "@styled"
import { useMemo, useState } from "react"
import LabelsFilteringChips from "@components/LabelsFilteringChips"
import { Select as StatusSelect } from "@components/ui/Select"
import { BiSearchAlt } from "react-icons/bi"
import { IssueStatus } from "@enums"
import TwoColumnLayout from "@/layouts/BaseLayout"

function buildIssueProgressStatuses() {
  return [
    {
      label: "issue status",
      items: Object.keys(IssueStatus).map((key: string) => ({
        display: IssueStatus[key as keyof typeof IssueStatus] as string,
        value: key
      }))
    }
  ]
}

export default function Issues() {
  const [searchIssues, setSearchIssues] = useState<string>("")
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
    const status = IssueStatus[enumKey as keyof typeof IssueStatus]

    if (status) {
      setSelectedStatus(status)
    } else {
      console.error(
        "Issues page could not filter issues by status because of invalid selection",
        enumKey,
        status
      )
    }
  }

  return (
    <TwoColumnLayout
      aside={
        <>
          <Tooltip
            placement="topLeft"
            trigger={["hover"]}
            overlay={
              <TooltipSpan>Click the label chips to toggle filter by their name</TooltipSpan>
            }
          >
            <Subtitle className="py-0">Labels</Subtitle>
          </Tooltip>
          <LabelsFilteringChips
            className="mt-2 justify-center gap-x-2 gap-y-3 md:justify-start"
            selected={selectedLabels}
            toggle={handleLabelToggle}
          />
          <Subtitle>Status</Subtitle>
          <StatusSelect
            defaultValue={selectedStatus}
            onValueChange={handleStatusSelection}
            groups={groups}
          />
        </>
      }
      section={
        <>
          <IssuesSearch>
            <BiSearchAlt className="text-md ml-1" />
          </IssuesSearch>
          <Title>Issues</Title>
          <IssuesList
            searchQuery={searchIssues}
            filterByLabels={selectedLabels}
            filterByStatus={selectedStatus}
          />
        </>
      }
    />
  )
}
