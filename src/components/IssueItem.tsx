import { GoComment, GoIssueClosed, GoIssueOpened } from "react-icons/go"

import { Link } from "react-router-dom"
import { isOpenIssue } from "@enums"
import { Paragraph, Span, Small } from "@styled"
import { relativeDate } from "@helpers/relativeDate"
import tw from "tailwind-styled-components"
import { useUser } from "@hooks"

import { AssigneeProfilePicture } from "@components/AssigneeProfilePicture"
import LabelsList from "@components/LabelsList"
import { Dots } from "@ui"

type IssueItemProps = {
  id: string
  assignee: string
  commentsCount: number
  createdBy: string
  createdDate: string
  labelIDs: string[]
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
  labelIDs,
  number,
  status,
  title
}: IssueItemProps) {
  const issueDetailHref = `/issues/${number}`

  const createdBy = useUser(createdById)

  const creatorName = createdBy?.isSuccess ? <strong>{createdBy.data.name}</strong> : <Dots />

  return (
    <li>
      <div className="grid grid-cols-12">
        <EdgeColumn>
          <span>
            {isOpenIssue(status) ? (
              <GoIssueClosed className="text-green-600" />
            ) : (
              <GoIssueOpened className="text-red-600 " />
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
                  #{number} set to <u>{status}</u> {relativeDate(createdDate)} by {creatorName}
                </Small>
              </Paragraph>
            </div>
            <div>
              {/* selected={["help"]} ?? */}
              <LabelsList className="mt-2" selected={labelIDs} />
            </div>
          </div>
        </div>
        <div className="col-span-1 my-auto hidden lg:inline-block">
          <span className="flex justify-end">
            <AssigneeProfilePicture userId={assigneeId} />
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
