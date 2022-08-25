import IssuesList from "@components/IssuesList"
import Search from "@/src/components/ui/Search"
import { Subtitle, Title, Tooltip, TooltipSpan } from "@styled"
import { useState } from "react"
import LabelsFilteringChips from "@components/LabelsFilteringChips"
import { Select } from "@/src/components/ui/Select"
import { BiSearchAlt } from "react-icons/bi"

export default function Issues() {
  /** Selected labels is passed down to children components to filter out undesired issues */
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

  function handleLabelToggle(label: string) {
    setSelectedLabels((currentLabels) =>
      currentLabels.includes(label)
        ? currentLabels.filter((currentLabel) => currentLabel !== label)
        : currentLabels.concat(label)
    )
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
          <Select />
        </aside>
        <section className="pt-4 lg:pt-0">
          <Search>
            <BiSearchAlt className="text-md ml-1" />
          </Search>
          <Title>Issues</Title>
          <IssuesList filterByName={selectedLabels} />
        </section>
      </main>
    </div>
  )
}
