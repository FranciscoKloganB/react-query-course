import { useQuery } from "react-query"

import { IssueItem } from "./IssueItem"
import { Border, Paragraph } from "./styled"

function issuesFetcher() {
  return fetch("api/issues").then((res) => res.json())
}

export default function IssuesList() {
  const { data, isLoading } = useQuery(["issues"], issuesFetcher)

  return (
    <div>
      {isLoading ? (
        <Paragraph>Loading...</Paragraph>
      ) : (
        <ul>
          {data.map((issue: Issue) => (
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
      )}
    </div>
  )
}
