import { Fragment } from "react"
import { useParams } from "react-router-dom"

import { Comment } from "@components/Comment"
import { IssueHeader } from "@components/IssueHeader"
import { useGetIssueDetail, useIssueComments } from "@hooks"
import { useTimedRedirect } from "@hooks/useTimedRedirect"
import { Paragraph, Subtitle } from "@styled"
import { Dots, FullSpinner, HorizontalDivider } from "@ui"

export function IssueDetails() {
  const { number = "" } = useParams()

  const timedRedirect = useTimedRedirect()

  const issueQuery = useGetIssueDetail(number)
  const {
    infiniteQuery: commentsQuery,
    nextRef,
    previousRef,
    shouldShowFetchingNext,
    shouldShowFetchingPrevious
  } = useIssueComments(number)

  const commentsPages = commentsQuery.data?.pages ?? []

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
        <div className="text-center" ref={previousRef}>
          {shouldShowFetchingPrevious && <Dots />}
        </div>
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
        <div className="text-center" ref={nextRef}>
          {shouldShowFetchingNext && <Dots />}
        </div>
      </div>
    </div>
  )
}
