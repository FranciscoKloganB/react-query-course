import type { BreadcrumbComponentProps } from "use-react-router-breadcrumbs"

export const DynamicIssueDetailBreadcrumb = (p: BreadcrumbComponentProps) => (
  <span>Issue #{p.match.params.number}</span>
)
