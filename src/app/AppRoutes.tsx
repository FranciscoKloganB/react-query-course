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
import { useCrumbs } from "@hooks"

const Routes = () => (
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
  const crumbsContext = useCrumbs()

  const routes = Routes()
  const routeObjects = createRoutesFromChildren(routes)

  const breadCrumbs = useBreadcrumbs(routeObjects)
  crumbsContext.setCrumbs(breadCrumbs)

  const GeneratedRoutes = useRoutes(routeObjects)

  return GeneratedRoutes
}
