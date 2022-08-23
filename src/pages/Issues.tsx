import IssuesList from "@components/IssuesList"
import SearchInput from "@components/SearchInput"
import { Paragraph, Subtitle, Title } from "@styled"
import { GoSearch } from "react-icons/go"
import { useState } from "react"
import LabelsFilteringChips from "@components/LabelsFilteringChips"

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
          <Subtitle>Labels</Subtitle>
          <Paragraph className="hidden lg:inline-block">Select a label to filter</Paragraph>
          <LabelsFilteringChips
            className="mt-2 justify-center gap-x-2 gap-y-3 md:justify-start"
            selected={selectedLabels}
            toggle={handleLabelToggle}
          />
        </aside>
        <section>
          <Subtitle>Search Issues</Subtitle>
          <SearchInput>
            <GoSearch />
          </SearchInput>
          <Title>Issues</Title>
          <IssuesList />
        </section>
      </main>
    </div>
  )
}
