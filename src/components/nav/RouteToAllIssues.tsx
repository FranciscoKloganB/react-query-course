import { useMatch, Link } from "react-router-dom"
import { Button } from "@styled"

export function RouteToAllIssues() {
  const isRootPath = useMatch({ path: "/", end: true })

  if (isRootPath) {
    return null
  }
  return (
    <Button $as="div" className="mt-2">
      <Link to="/" className="place-self-end">
        See all issues
      </Link>
    </Button>
  )
}
