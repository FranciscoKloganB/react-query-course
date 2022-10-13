import { useState } from "react"
import { BiSearchAlt } from "react-icons/bi"

import { IssueItem } from "@components/IssueItem"
import { IssueStatus } from "@enums"
import { useIssuesList, useIssuesSearch } from "@hooks"
import { Border, Paragraph } from "@styled"
import { FullSpinner, Paginator, Search } from "@ui"

type IssuesListProps = {
  filterByLabels: string[]
  filterByStatus?: IssueStatus
  page: number
  perPage: number
  setPage: (newPage: number) => void
}

function RenderIssues({ issues }: { issues: Issue[] }) {
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

export default function IssuesList({
  filterByLabels,
  filterByStatus,
  page,
  perPage,
  setPage
}: IssuesListProps) {
  const [search, setSearch] = useState<string>("")

  const searchQuery = useIssuesSearch(search)
  const issuesListQuery = useIssuesList({
    labels: filterByLabels,
    status: filterByStatus,
    page,
    perPage
  })

  let searchResult: Issue[] = []
  if (searchQuery.isSuccess) {
    searchResult = [...searchQuery.data.items]

    if (filterByStatus) {
      searchResult = searchResult.filter(
        (issue) => issue.status === filterByStatus
      )
    }

    if (filterByLabels.length) {
      searchResult = searchResult.filter((issue) =>
        issue.labelIDs.some((label) => filterByLabels.includes(label))
      )
    }
  }

  return (
    <div className="mt-3 space-y-3">
      <Search state={search} setState={setSearch}>
        <BiSearchAlt className="text-md ml-1" />
      </Search>
      {issuesListQuery.isLoading ? (
        <FullSpinner />
      ) : searchQuery.isDisabled && issuesListQuery.isSuccess ? (
        <>
          <Paragraph>{issuesListQuery.data.length} results</Paragraph>
          <RenderIssues issues={issuesListQuery.data} />
          <Paginator page={page} pageSetter={setPage} maxPages={10} />
        </>
      ) : searchQuery.isFirstFetching ? (
        <FullSpinner />
      ) : searchQuery.isSuccess ? (
        <>
          <Paragraph>{searchResult.length} results</Paragraph>
          <RenderIssues issues={searchResult} />
        </>
      ) : (
        <Paragraph>Unable to load issues...</Paragraph>
      )}
    </div>
  )
}
