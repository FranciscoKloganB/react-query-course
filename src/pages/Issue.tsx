import IssueDetails from "@components/IssueDetails"
import { Link } from "@rrd/link"

export default function Issue() {
  return (
    <div>
      <main className="grid lg:grid-cols-[75%_25%]">
        <aside className="lg:order-last lg:ml-6 xl:ml-12">
          <Link to="/">See all issues</Link>
        </aside>
        <section className="pt-4 lg:pt-0">
          <IssueDetails />
        </section>
      </main>
    </div>
  )
}
