import { useNavigate, useParams } from "react-router-dom"
import { useIssue, useIssueComments } from "@hooks"
import { IssueHeader } from "./IssueHeader"
import { FullSpinner } from "./ui"
import { HorizontalDivider } from "./ui/HorizontalDivider"
import { Comment } from "./Comment"

export function IssueDetails() {
  const { number = "" } = useParams()
  const navigate = useNavigate()

  const issueQuery = useIssue(number)
  const commentsQuery = useIssueComments(number)

  if (issueQuery.isLoading) {
    return <FullSpinner />
  }

  if (issueQuery.isError) {
    navigate("./", { replace: true })

    return null
  }

  return (
    <div>
      <IssueHeader {...issueQuery.data} />
      <HorizontalDivider />
      <div>
        {commentsQuery.isLoading ? (
          <FullSpinner />
        ) : (
          commentsQuery.data?.map((comment) => <Comment key={comment.id} {...comment} />)
        )}
      </div>
    </div>
  )
}
