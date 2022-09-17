import { DefaultLayout } from "@layouts"
import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"
import NotFound from "@pages/NotFound"
import { GoUnfold } from "react-icons/go"
import { BreadcrumbsRoute } from "use-react-router-breadcrumbs"
import { HomeBreadcrumb, DynamicIssueDetailBreadcrumb } from "./breadcrumbs"

export const routes: BreadcrumbsRoute<string>[] = [
  {
    breadcrumb: HomeBreadcrumb,
    element: <DefaultLayout />,
    path: "/",
    children: [
      {
        breadcrumb: "Issues List",
        element: <Issues />,
        index: true,
        menuAction: {
          action: "See All Issues",
          disabled: false,
          icon: <GoUnfold />,
          path: "/",
          shortcut: undefined
        }
      },
      {
        breadcrumb: DynamicIssueDetailBreadcrumb,
        element: <Issue />,
        path: "issues/:number"
      },
      {
        breadcrumb: "Create Issue",
        element: <AddIssue />,
        path: "issues/create"
      },
      {
        breadcrumb: null,
        element: <NotFound />,
        path: "*"
      }
    ]
  }
]
