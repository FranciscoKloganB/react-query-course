import { GoComment, GoIssueClosed, GoIssueOpened } from "react-icons/go"
import { Link } from "react-router-dom"
import { isClosedIssue } from "@enums/IssueStatus.enum"
import { Paragraph, Span, Small, Chip } from "./styled"
import { relativeDate } from "@helpers/relativeDate"
import tw from "tailwind-styled-components"

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
  assignee,
  commentsCount,
  createdBy,
  createdDate,
  labels,
  number,
  status,
  title
}: IssueItemProps) {
  const issueDetailHref = `/issue/${id}`

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
              <Span>{title}</Span>
            </Link>
            <div>
              <Paragraph className="text-base">
                <Small>
                  #{number} set to <strong>{status}</strong> by <strong>{createdBy}</strong> —{" "}
                  {relativeDate(createdDate)}
                </Small>
              </Paragraph>
            </div>
            <div>
              <ul className="mt-2">
                {labels.map((label) => (
                  <Chip key={label}>{label}</Chip>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* FIXME: Remove background color when assignee ID is replaced with profile avatar */}
        <div className="col-span-1 my-auto hidden bg-red-600 text-end lg:inline-block">
          {assignee}
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
