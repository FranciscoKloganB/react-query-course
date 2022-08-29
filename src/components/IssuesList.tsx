import { useIssues } from "@hooks"
import { IssueItem } from "@components/IssueItem"
import { Border, Paragraph } from "@styled"
import { IssueStatus } from "../enums"
import { FullSpinner } from "./ui/FullSpinner"

type IssuesListProps = {
  searchQuery: string
  filterByLabels: string[]
  filterByStatus?: IssueStatus
}

export default function IssuesList({ filterByLabels, filterByStatus }: IssuesListProps) {
  const issues = useIssues({ labels: filterByLabels, status: filterByStatus })

  if (issues.isLoading) {
    return <FullSpinner />
  }

  if (issues.isError) {
    return (
      <div>
        <Paragraph>{issues.error}</Paragraph>
      </div>
    )
  }

  return (
    <div>
      <ul className="mt-3 space-y-3">
        {issues.data.map((issue: Issue) => (
          <div key={issue.id}>
            <Border>
              <IssueItem
                id={issue.id}
                assignee={issue.assignee}
                commentsCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labelIDs={issue.labelIDs}
                number={issue.number}
                status={issue.status}
                title={issue.title}
              />
            </Border>
          </div>
        ))}
      </ul>
    </div>
  )
}
