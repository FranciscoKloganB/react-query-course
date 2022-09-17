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
import { Route } from "use-react-router-breadcrumbs"
import { useBreadcrumbRoutesContext } from "@hooks"
import { useEffect } from "react"

import { DefaultLayout } from "../layouts/DefaultLayout"
import { routes } from "@common/routes"

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

export function AppRoutes() {
  const crumbsContext = useBreadcrumbRoutesContext()

  useEffect(() => {
    crumbsContext.setObjects(routes)
  }, [])

  const GeneratedRoutes = useRoutes(routes)

  return GeneratedRoutes
}
