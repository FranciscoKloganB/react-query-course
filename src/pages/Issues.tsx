import IssuesList from "../components/IssuesList"
import LabelList from "../components/LabelList"
import { Title } from "../components/styled"

export default function Issues() {
  return (
    <div>
      <main>
        <section>
          <Title>Issues</Title>
          <IssuesList />
        </section>
        <aside className="flex flex-1 flex-row gap-2">
          <LabelList />
        </aside>
      </main>
    </div>
  )
}
