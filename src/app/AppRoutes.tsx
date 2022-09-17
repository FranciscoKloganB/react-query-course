import { useRoutes } from "react-router-dom"

import { useBreadcrumbRoutesContext } from "@hooks"
import { useEffect } from "react"

import { routes } from "@common/routes"

export function AppRoutes() {
  const crumbsContext = useBreadcrumbRoutesContext()

  useEffect(() => {
    crumbsContext.setObjects(routes)
  }, [])

  const GeneratedRoutes = useRoutes(routes)

  return GeneratedRoutes
}
