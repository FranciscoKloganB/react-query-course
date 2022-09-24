type BaseLayoutProps = {
  content: React.ReactNode
  aside?: React.ReactNode
}

export function BaseLayout({ content, aside }: BaseLayoutProps) {
  return (
    <main className="grid lg:grid-cols-[75%_25%]">
      <aside className="lg:order-last lg:ml-6 xl:ml-12">{aside ?? null}</aside>
      <section className="pt-4 lg:pt-0">{content}</section>
    </main>
  )
}
