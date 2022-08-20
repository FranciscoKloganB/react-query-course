import IssuesList from "@components/IssuesList"
import LabelList from "@components/LabelList"
import SearchInput from "@components/SearchInput"
import { Subtitle, Title } from "@components/styled"
import { GoSearch } from "react-icons/go"

export default function Issues() {
  return (
    <div>
      <main className="grid lg:grid-cols-[75%_25%] lg:gap-x-12">
        <aside className="lg:order-last">
          <Subtitle>Labels</Subtitle>
          <LabelList />
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
