/* eslint-disable react/jsx-no-undef */
import { Navigate, useRoutes } from "react-router-dom"
import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"
import NotFound from "@pages/NotFound"
import { DynamicIssueDetailBreadcrumb } from "@common/routes/breadcrumbs"
import useBreadcrumbs, {
  createRoutesFromChildren,
  Route
} from "use-react-router-breadcrumbs"

const buildRoutes = () => (
  <>
    <Route path="/" element={<Navigate replace to="issues" />}></Route>
    <Route breadcrumb="Issues List" element={<Issues />} path="/issues" />
    <Route
      breadcrumb={DynamicIssueDetailBreadcrumb}
      element={<Issue />}
      path="/issues/:number"
    />
    <Route
      breadcrumb={"Create Issue"}
      element={<AddIssue />}
      path="/issues/create"
    />
    <Route breadcrumb="Error" path="*" element={<NotFound />} />
  </>
)

export function AppRoutes() {
  const routeObjects = createRoutesFromChildren(buildRoutes())
  const breadCrumbs = useBreadcrumbs(routeObjects)

  return useRoutes(routeObjects)
}
