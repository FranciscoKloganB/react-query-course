import { Fragment } from "react"
import { useParams } from "react-router-dom"

import { Comment } from "@components/Comment"
import { IssueHeader } from "@components/IssueHeader"
import { useGetIssueDetail, useIssueComments } from "@hooks"
import { useTimedRedirect } from "@hooks/useTimedRedirect"
import { Paragraph, Subtitle } from "@styled"
import { FullSpinner, HorizontalDivider, Spinner } from "@ui"

export function IssueDetails() {
  const { number = "" } = useParams()

  const timedRedirect = useTimedRedirect()

  const issueQuery = useGetIssueDetail(number)
  const commentsQuery = useIssueComments(number)

  const commentsPages = commentsQuery.data?.pages ?? []
  const shouldShowFetchingNext =
    commentsQuery.isFetchingNextPage && !commentsQuery.isLoading
  const shouldShowFetchingPrevious =
    commentsQuery.isFetchingPreviousPage && !commentsQuery.isLoading

  if (issueQuery.isLoading) {
    return <FullSpinner />
  }

  if (issueQuery.isError) {
    timedRedirect()

    return (
      <div>
        <Subtitle>
          Sorry. We could not load the details for this issue.
        </Subtitle>
        <Paragraph>Please try again later.</Paragraph>
        <Paragraph>
          You will be redirected to the main page in 10 seconds.
        </Paragraph>
      </div>
    )
  }

  return (
    <div>
      <IssueHeader {...issueQuery.data} />
      <HorizontalDivider />
      <div>
        {shouldShowFetchingPrevious && <Spinner />}
        {commentsQuery.isLoading ? (
          <FullSpinner />
        ) : (
          commentsPages.map((page, pageIndex) => (
            <Fragment key={pageIndex}>
              {page.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))}
            </Fragment>
          ))
        )}
        {shouldShowFetchingNext && <Spinner />}
      </div>
    </div>
  )
}
