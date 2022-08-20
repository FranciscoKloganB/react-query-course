import IssuesList from "@components/IssuesList"
import LabelList from "@components/LabelList"
import SearchInput from "@components/SearchInput"
import { Subtitle, Title } from "@components/styled"

export default function Issues() {
  return (
    <div>
      <main className="grid lg:grid-cols-[75%_25%]">
        <aside className="bg-slate-600 lg:order-last">
          <Subtitle>Labels</Subtitle>
          <LabelList />
        </aside>
        <section>
          <SearchInput />
          <Title>Issues</Title>
          <IssuesList />
        </section>
      </main>
    </div>
  )
}
