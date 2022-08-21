import { GoComment, GoIssueClosed, GoIssueOpened } from "react-icons/go"
import { BsThreeDots } from "react-icons/bs"

import { Link } from "react-router-dom"
import { isClosedIssue } from "@enums"
import { Paragraph, Span, Small } from "@components/styled"
import { relativeDate } from "@helpers/relativeDate"
import tw from "tailwind-styled-components"
import { useUser } from "@hooks"

import { AssigneeProfilePicture } from "./ui/AssigneeProfilePicture"
import LabelsList from "./LabelsList"

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

const EdgeColumn = tw.div`
  col-span-2 m-auto
`

export function IssueItem({
  id,
  assignee: assigneeId,
  commentsCount,
  createdBy: createdById,
  createdDate,
  labels,
  number,
  status,
  title
}: IssueItemProps) {
  const issueDetailHref = `/issue/${id}`

  const assignee = useUser(assigneeId)
  const createdBy = useUser(createdById)

  const creator = createdBy.isSuccess ? (
    <strong>{createdBy.data?.name}</strong>
  ) : (
    <Span>
      <BsThreeDots className="inline-flex animate-bounce" />
    </Span>
  )

  return (
    <li>
      <div className="grid grid-cols-12">
        <EdgeColumn>
          <span>
            {isClosedIssue(status) ? (
              <GoIssueClosed className="text-red-600" />
            ) : (
              <GoIssueOpened className="text-green-600 " />
            )}
          </span>
        </EdgeColumn>
        <div className="col-span-8 lg:col-span-7">
          <div>
            <Link to={issueDetailHref}>
              <Span className="hover:text-yellow-400">{title}</Span>
            </Link>
            <div>
              <Paragraph className="text-base">
                <Small>
                  #{number} set to <u>{status}</u> {relativeDate(createdDate)} by {creator}
                </Small>
              </Paragraph>
            </div>
            <div>
              <LabelsList className="mt-2" labels={labels} />
            </div>
          </div>
        </div>
        <div className="col-span-1 my-auto hidden lg:inline-block">
          <span className="flex justify-end">
            {assigneeId && <AssigneeProfilePicture userQuery={assignee} />}
          </span>
        </div>
        {commentsCount && (
          <EdgeColumn>
            <div className="flex flex-row items-center gap-x-2 ">
              <Span className="sr-only">
                Issue {number} has {commentsCount} comments
              </Span>
              <Span>
                <GoComment className="mt-1" />
              </Span>
              <Span className="hidden text-sm md:inline-block">{commentsCount}</Span>
            </div>
          </EdgeColumn>
        )}
      </div>
    </li>
  )
}
