/* eslint-disable react/jsx-no-undef */
import { useRoutes } from "react-router-dom"
import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"
import NotFound from "@pages/NotFound"
import {
  DynamicIssueDetailBreadcrumb,
  HomeBreadcrumb
} from "@common/routes/breadcrumbs"
import { createRoutesFromChildren, Route } from "use-react-router-breadcrumbs"
import { useBreadcrumbRoutesContext } from "@hooks"
import { useEffect } from "react"

import type { BreadcrumbsRoute } from "use-react-router-breadcrumbs"
import { DefaultLayout } from "../layouts/DefaultLayout"

const Routes = () => (
  <>
    <Route breadcrumb={HomeBreadcrumb} path="/" element={<DefaultLayout />}>
      <Route breadcrumb="Issues List" element={<Issues />} index />
      <Route
        breadcrumb={DynamicIssueDetailBreadcrumb}
        element={<Issue />}
        path="issues/:number"
      />
      <Route
        breadcrumb={"Create Issue"}
        element={<AddIssue />}
        path="issues/create"
      />
      <Route breadcrumb={null} path="*" element={<NotFound />} />
    </Route>
  </>
)

const routes: BreadcrumbsRoute<string>[] = []

export function AppRoutes() {
  const routes = Routes()
  const routeObjects = createRoutesFromChildren(routes)

  const crumbsContext = useBreadcrumbRoutesContext()

  useEffect(() => {
    crumbsContext.setObjects([...routeObjects])
  }, [])

  const GeneratedRoutes = useRoutes(routeObjects)

  return GeneratedRoutes
}
