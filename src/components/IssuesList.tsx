import { useIssues } from "@hooks"
import { IssueItem } from "./IssueItem"
import { Border, Paragraph } from "./styled"

export default function IssuesList() {
  const { error, issues, isLoading, isError } = useIssues()

  if (isLoading) {
    return (
      <div>
        <Paragraph>Loading...</Paragraph>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <Paragraph>{error}</Paragraph>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {issues.map((issue: Issue) => (
          <div key={issue.id}>
            <Border>
              <IssueItem
                id={issue.id}
                assignee={issue.assignee}
                commentsCount={issue.comments.length}
                createdBy={issue.createdBy}
                createdDate={issue.createdDate}
                labels={issue.labels}
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
