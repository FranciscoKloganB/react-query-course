import { useParams } from "react-router-dom"
import { useIssue } from "@hooks"
import { IssueHeader } from "./IssueHeader"
import { FullSpinner } from "./ui"

export default function IssueDetails() {
  const { number } = useParams()

  if (!number) {
    console.warn("Issue Details can not render properly with undefined number prop")

    return null
  }

  const issueQuery = useIssue(number)

  if (issueQuery.isLoading) {
    return <FullSpinner />
  }

  if (issueQuery.isError) {
    // TODO: Redirect to 404

    return null
  }

  return <IssueHeader {...issueQuery.data} />
}
