import IssuesList from "@components/IssuesList"
import SearchInput from "@components/SearchInput"
import { Paragraph, Subtitle, Title } from "@components/styled"
import { GoSearch } from "react-icons/go"
import LabelsPanel from "../components/LabelsPanel"

export default function Issues() {
  return (
    <div>
      <main className="grid lg:grid-cols-[75%_25%]">
        <aside className="lg:order-last lg:ml-6">
          <Subtitle>Labels</Subtitle>
          <Paragraph>Select a label to filter</Paragraph>
          <LabelsPanel />
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
