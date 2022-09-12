import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"

const routes = [
  { path: "/", name: "Issues", component: Issues },
  { path: "/issues/create", name: "Create Issue", component: AddIssue },
  { path: "/issues/:number", name: "Issue Details", component: Issue }
] as const

export default routes
