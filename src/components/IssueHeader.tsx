import { IssueStatus } from "@enums"
import { Span, Subtitle } from "@styled"
import { StatusChip } from "@components/StatusChip"
import { relativeDate } from "@helpers"
import { useUser } from "@hooks"
import { Dots } from "@ui"

type IssueHeaderProps = {
  comments: string[]
  createdBy: string
  createdDate: string
  number: number
  title: string
  status?: IssueStatus
}

export function IssueHeader({
  comments,
  createdBy,
  createdDate,
  number,
  title,
  status = IssueStatus.TODO
}: IssueHeaderProps) {
  const userQuery = useUser(createdBy)

  const creatorName = userQuery?.isLoading ? <Dots /> : <strong>{userQuery.data?.name}</strong>

  return (
    <header>
      <Subtitle>
        {title} — <span className="text-slate-400">#{number}</span>
      </Subtitle>
      <div className="flex items-center gap-2">
        <StatusChip status={status} />
        <Span>
          {creatorName} has set the issue to <u>{status}</u> {relativeDate(createdDate)} —{" "}
          {comments.length} comments
        </Span>
      </div>
    </header>
  )
}
