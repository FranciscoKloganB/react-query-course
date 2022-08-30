import { Link, useMatch } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"

export function AuthenticatedApp() {
  const isRootPath = useMatch({ path: "/", end: true })

  return (
    <div>
      {!isRootPath ? <Link to="/">See all issues</Link> : null}
      <AppRoutes />
    </div>
  )
}
