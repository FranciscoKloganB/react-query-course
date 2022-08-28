import IssueDetails from "@components/IssueDetails"
import { Button } from "@styled"

export default function Issue() {
  return (
    <div>
      <main className="grid lg:grid-cols-[75%_25%]">
        <aside className="lg:order-last lg:ml-6 xl:ml-12"></aside>
        <section className="pt-4 lg:pt-0">
          <Button>back to issues</Button>
          <IssueDetails />
        </section>
      </main>
    </div>
  )
}
