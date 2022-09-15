import { Title } from "@styled"

export function FullPageErrorFallback({ error }: { error: unknown }) {
  return (
    <main className="grid justify-center text-center">
      <div>
        <Title className="">Oops. Something went wrong, try again later!</Title>
        <pre className="inline-flex">{JSON.stringify(error)}</pre>
      </div>
    </main>
  )
}
