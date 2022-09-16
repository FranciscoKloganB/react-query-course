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
import { useEffect } from "react"

const Routes = () => (
  <>
    <Route path="/" element={<Navigate replace to="issues" />} />
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
  const routes = Routes()
  const routeObjects = createRoutesFromChildren(routes)

  const crumbsContext = useCrumbs()
  const breadCrumbs = useBreadcrumbs(routeObjects)

  useEffect(() => {
    /**
     * We slice the routes since our root path is rendered manually and /
     * always redirects to /issues.
     *
     * We also have a bug when we use Homebread crumb directly in the Route of path "/"
     */
    crumbsContext.setCrumbs(breadCrumbs.slice(1))
  }, [])

  const GeneratedRoutes = useRoutes(routeObjects)

  return GeneratedRoutes
}
