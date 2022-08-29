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

export default function IssuesList({ filterByLabels, filterByStatus }: IssuesListProps) {
  const [search, setSearch] = useState<string>("")
  const searchQuery = useIssuesSearch(search)
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
    <div className="mt-3">
      <Search state={search} setState={setSearch}>
        <BiSearchAlt className="text-md ml-1" />
      </Search>
      <ul className="mt-4 space-y-3">
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
