import { useRef } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"

import { Comment } from "@components/Comment"
import { IssueHeader } from "@components/IssueHeader"
import { seconds } from "@helpers"
import { useGetIssueDetail, useIssueComments } from "@hooks"
import { Paragraph, Subtitle } from "@styled"
import { FullSpinner, HorizontalDivider } from "@ui"

export function IssueDetails() {
  const { number = "" } = useParams()

  const location = useLocation()
  const navigate = useNavigate()

  const originalPathRef = useRef(location.pathname)
  const redirecting = useRef(false)

  const issueQuery = useGetIssueDetail(number)
  const commentsQuery = useIssueComments(number)

  if (issueQuery.isLoading) {
    return <FullSpinner />
  }

  if (issueQuery.isError) {
    if (!redirecting.current) {
      redirecting.current = true
      setTimeout(() => {
        if (location.pathname === originalPathRef.current) {
          navigate("/", { replace: true })
        }
      }, seconds(10))
    }

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
