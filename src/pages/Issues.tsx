import IssuesList from "@components/IssuesList"
import { Search as IssuesSearch } from "@components/ui/Search"
import { Subtitle, Title, Tooltip, TooltipSpan } from "@styled"
import { useMemo, useState } from "react"
import LabelsFilteringChips from "@components/LabelsFilteringChips"
import { Select as StatusSelect } from "@components/ui/Select"
import { BiSearchAlt } from "react-icons/bi"
import { IssueStatus } from "@enums"

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
    <div>
      <main className="grid lg:grid-cols-[75%_25%]">
        <aside className="lg:order-last lg:ml-6 xl:ml-12">
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
        </aside>
        <section className="pt-4 lg:pt-0">
          <IssuesSearch>
            <BiSearchAlt className="text-md ml-1" />
          </IssuesSearch>
          <Title>Issues</Title>
          <IssuesList
            searchQuery={searchIssues}
            filterByLabels={selectedLabels}
            filterByStatus={selectedStatus}
          />
        </section>
      </main>
    </div>
  )
}
