import { Fragment, useState } from "react"
import { BiSearchAlt } from "react-icons/bi"

import { IssueItem } from "@components/IssueItem"
import { IssueStatus } from "@enums"
import { useIssuesList, useIssuesSearch } from "@hooks"
import { Border, Paragraph } from "@styled"
import { FullSpinner, Search } from "@ui"

type IssuesListProps = {
  filterByLabels: string[]
  filterByStatus?: IssueStatus
  page: number
  perPage: number
  setPage: (newPage: number) => void
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

export default function IssuesList({
  filterByLabels,
  filterByStatus,
  page,
  perPage
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
        <Fragment>
          <Paragraph>{issuesListQuery.data.length} results</Paragraph>
          <__RenderList__ issues={issuesListQuery.data} />
        </Fragment>
      ) : searchQuery.isFirstFetching ? (
        <FullSpinner />
      ) : searchQuery.isSuccess ? (
        <Fragment>
          <Paragraph>{searchResult.length} results</Paragraph>
          <__RenderList__ issues={searchResult} />
        </Fragment>
      ) : (
        <Paragraph>Unable to load issues...</Paragraph>
      )}
    </div>
  )
}
