type TwoColumnLayoutProps = {
  aside: React.ReactElement
  section: React.ReactElement
}

/**
 * Given section and aside contents it renders them respectively in a two column grid layout.
 *
 * The section is rendered as the main content of the page with 75% max-width.
 * The aside is rendered to the left with 25% max-width.
 *
 * By default section content takes priority in desktop views (being rendered on the left of aside).
 */
export default function TwoColumnLayout({ aside, section }: TwoColumnLayoutProps) {
  return (
    <div>
      <main className="grid lg:grid-cols-[75%_25%]">
        <aside className="lg:order-last lg:ml-6 xl:ml-12">{aside}</aside>
        <section className="pt-4 lg:pt-0">{section}</section>
      </main>
    </div>
  )
}
