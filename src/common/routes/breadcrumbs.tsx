import { GoHome } from "react-icons/go"
import type { BreadcrumbComponentProps } from "use-react-router-breadcrumbs"

export const DynamicIssueDetailBreadcrumb = (p: BreadcrumbComponentProps) => (
  <span>Issue #{p.match.params.number}</span>
)

export const HomeBreadcrumb = (
  <>
    <GoHome className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
    <span className="sr-only">Home</span>
  </>
)
