import { useParams } from "react-router-dom"

import { Comment } from "@components/Comment"
import { IssueHeader } from "@components/IssueHeader"
import { useGetIssueDetail, useIssueComments } from "@hooks"
import { useTimedRedirect } from "@hooks/useTimedRedirect"
import { Paragraph, Subtitle } from "@styled"
import { FullSpinner, HorizontalDivider } from "@ui"

export function IssueDetails() {
  const { number = "" } = useParams()

  const issueQuery = useGetIssueDetail(number)
  const commentsQuery = useIssueComments(number)

  const timedRedirect = useTimedRedirect()

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

  const comments = commentsQuery.data ?? []

  return (
    <div>
      <IssueHeader {...issueQuery.data} />
      <HorizontalDivider />
      <div>
        {commentsQuery.isLoading ? (
          <FullSpinner />
        ) : (
          comments.map((comment) => <Comment key={comment.id} {...comment} />)
        )}
      </div>
    </div>
  )
}
