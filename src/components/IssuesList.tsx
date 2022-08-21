import { useIssues } from "@hooks"
import { IssueItem } from "./IssueItem"
import { Border, Paragraph } from "@components/styled"

export default function IssuesList() {
  const issues = useIssues()

  if (issues.isLoading) {
    return (
      <div>
        <Paragraph>Loading...</Paragraph>
      </div>
    )
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
      <ul>
        {issues.data.map((issue: Issue) => (
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
