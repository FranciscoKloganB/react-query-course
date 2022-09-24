import { useEffect } from "react"
import { useRoutes } from "react-router-dom"

import { routes } from "@common/routes"
import { useBreadcrumbRoutesContext } from "@hooks"

export function AppRoutes() {
  const crumbsContext = useBreadcrumbRoutesContext()

  useEffect(() => {
    crumbsContext.setObjects(routes)
  }, [])

  const GeneratedRoutes = useRoutes(routes)

  return GeneratedRoutes
}
