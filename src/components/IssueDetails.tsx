import { useNavigate, useParams } from "react-router-dom"
import { useIssue } from "@hooks"
import { IssueHeader } from "./IssueHeader"
import { FullSpinner } from "./ui"

export function IssueDetails() {
  const { number } = useParams()
  const navigate = useNavigate()

  const issueQuery = useIssue(number ?? "")

  if (issueQuery.isLoading) {
    return <FullSpinner />
  }

  if (issueQuery.isError) {
    navigate("./", { replace: true })

    return null
  }

  return <IssueHeader {...issueQuery.data} />
}
