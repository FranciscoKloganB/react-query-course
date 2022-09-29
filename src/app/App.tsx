import { useEffect, useMemo } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { routes } from "@common/routes"
import { useAuthContext } from "@hooks"
import { useBreadcrumbRoutesContext } from "@hooks"

function App() {
  const { isAuthenticated } = useAuthContext()

  const crumbsContext = useBreadcrumbRoutesContext()
  const browserRouter = useMemo(() => createBrowserRouter(routes), [])

  useEffect(() => {
    crumbsContext.setObjects(routes)
  }, [])

  return <RouterProvider router={browserRouter} />
}

export default App
