import { BreadcrumbsRoute } from "use-react-router-breadcrumbs"

import { BaseOutlet } from "@layouts"
import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"
import NotFound from "@pages/NotFound"

import { DynamicIssueDetailBreadcrumb, HomeBreadcrumb } from "./breadcrumbs"

export const routes: BreadcrumbsRoute<string>[] = [
  {
    breadcrumb: HomeBreadcrumb,
    element: <BaseOutlet />,
    path: "/",
    children: [
      {
        breadcrumb: "Issues List",
        element: <Issues />,
        index: true
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
