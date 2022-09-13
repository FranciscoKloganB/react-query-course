import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"
import { GoFile, GoPencil, GoPerson, GoSignOut, GoUnfold } from "react-icons/go"
import { MdOutlineEditNotifications } from "react-icons/md"

function DynamicIssueDetailBreadcrumb({ match }: any) {
  const { params } = match

  return <span>Issue #{params.number}</span>
}

const routesMap = {
  issuesList: {
    action: "See All Issues",
    breadcrumb: "Issues",
    element: <Issues />,
    icon: <GoUnfold />,
    path: "/"
  },
  issuesCreate: {
    action: "Create New Issue",
    breadcrumb: "Create Issue",
    element: <AddIssue />,
    icon: <GoPencil />,
    path: "/issues/create"
  },
  issuesDetail: {
    action: "See Issue Detail",
    breadcrumb: DynamicIssueDetailBreadcrumb,
    element: <Issue />,
    icon: <GoFile />,
    path: "/issues/:number"
  },
  authSignout: {
    action: "Signout",
    breadcrumb: undefined,
    element: <div>Not Implemented: Signout</div>,
    path: "/signout",
    icon: <GoSignOut />
  },
  profileNotifications: {
    action: "Notifications",
    breadcrumb: "Notifications",
    element: <div>Not Implemented: Notifications</div>,
    path: "/me/notifications",
    icon: <MdOutlineEditNotifications />
  },
  profilePreferences: {
    action: "Preferences",
    breadcrumb: "Preferences",
    element: <div>Not Implemented: Preferences</div>,
    path: "/me/preferences",
    icon: <GoPerson />
  }
} as const

const appRoutes = [
  routesMap.issuesList,
  routesMap.issuesCreate,
  routesMap.issuesDetail
]

const actionableRoutes = {
  auth: [routesMap.authSignout],
  pages: [routesMap.issuesCreate, routesMap.issuesList, routesMap.issuesDetail],
  profile: [routesMap.profileNotifications, routesMap.profilePreferences]
}

export default appRoutes
export { actionableRoutes }
