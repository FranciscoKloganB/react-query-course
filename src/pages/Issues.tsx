import IssuesList from "@components/IssuesList"
import SearchInput from "@components/SearchInput"
import { Subtitle, Title, Tooltip, TooltipSpan } from "@styled"
import { GoSearch } from "react-icons/go"
import { useState } from "react"
import LabelsFilteringChips from "@components/LabelsFilteringChips"
import { Select } from "@components/radix/Select"

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
        <section>
          <SearchInput>
            <GoSearch />
          </SearchInput>
          <Title>Issues</Title>
          <IssuesList filterByName={selectedLabels} />
        </section>
      </main>
    </div>
  )
}
