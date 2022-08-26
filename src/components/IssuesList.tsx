import { useIssues } from "@hooks"
import { IssueItem } from "@components/IssueItem"
import { Border, Paragraph } from "@styled"
import { FaSpinner } from "react-icons/fa"

export default function IssuesList({ filterByName }: { filterByName: string[] }) {
  const issues = useIssues({ labels: filterByName })

  if (issues.isLoading) {
    return (
      <div className="w-full text-center">
        <FaSpinner className="m-auto animate-spin text-white" />
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
