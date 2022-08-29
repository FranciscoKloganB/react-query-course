import { useIssues, useIssuesSearch } from "@hooks"
import { IssueItem } from "@components/IssueItem"
import { Border, Paragraph } from "@styled"
import { IssueStatus } from "@enums"
import { FullSpinner, Search } from "@ui"
import { useState } from "react"
import { BiSearchAlt } from "react-icons/bi"

type IssuesListProps = {
  filterByLabels: string[]
  filterByStatus?: IssueStatus
}

function __RenderList__({ issues }: { issues: Issue[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {issues.map((issue: Issue) => (
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
  )
}

export default function IssuesList({ filterByLabels, filterByStatus }: IssuesListProps) {
  const [search, setSearch] = useState<string>("")
  const issuesQuery = useIssues({ labels: filterByLabels, status: filterByStatus })
  const searchQuery = useIssuesSearch(search)

  return (
    <div className="mt-3 space-y-3">
      <Search state={search} setState={setSearch}>
        <BiSearchAlt className="text-md ml-1" />
      </Search>
      {issuesQuery.isLoading ? (
        <FullSpinner />
      ) : searchQuery.isDisabled && issuesQuery.isSuccess ? (
        <>
          <Paragraph>{issuesQuery.data.length} results</Paragraph>
          <__RenderList__ issues={issuesQuery.data} />
        </>
      ) : searchQuery.isLoading ? (
        <FullSpinner />
      ) : searchQuery.isSuccess ? (
        <>
          <Paragraph>{searchQuery.data.count} results</Paragraph>
          <__RenderList__ issues={searchQuery.data.items} />
        </>
      ) : (
        <Paragraph>Unable to load issues...</Paragraph>
      )}
    </div>
  )
}
