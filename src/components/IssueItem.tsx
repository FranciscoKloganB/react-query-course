import { GoIssueClosed, GoIssueOpened } from "react-icons/go"
import { Link } from "react-router-dom"
import { isClosedIssue } from "../enums/IssueStatus.enum"

type IssueItemProps = {
  id: string
  assignee: string
  commentsCount: number
  createdBy: string
  createdDate: string
  labels: string[]
  number: number
  status: string
  title: string
}

export function IssueItem({
  id,
  assignee,
  commentsCount,
  createdBy,
  createdDate,
  labels,
  number,
  status,
  title
}: IssueItemProps) {
  const detailHref = `/issue/${id}`

  return (
    <li>
      <Link to={detailHref}>
        <div className="grid grid-cols-3">
          <div className="">
            {isClosedIssue(status) ? (
              <GoIssueClosed className="text-red-600" />
            ) : (
              <GoIssueOpened className="text-green-600 " />
            )}
          </div>
          <span>{title}</span>
          <span>{commentsCount}</span>
        </div>
      </Link>
    </li>
  )
}
