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
        <aside>
          <LabelList />
        </aside>
      </main>
    </div>
  )
}
