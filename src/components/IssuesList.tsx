import { useQuery } from "react-query"

import { IssueItem } from "./IssueItem"

function issuesFetcher() {
  return fetch("api/issues").then((res) => res.json())
}

export default function IssuesList() {
  const { data, isLoading } = useQuery(["issues"], issuesFetcher)

  return (
    <div>
      <h2>Issues List</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((issue: Issue) => (
            <IssueItem
              key={issue.id}
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
          ))}
        </ul>
      )}
    </div>
  )
}
