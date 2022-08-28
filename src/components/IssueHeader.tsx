import { IssueStatus } from "@enums"
import { Span, Subtitle } from "@styled"
import { StatusChip } from "@components/StatusChip"

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
  return (
    <header>
      <Subtitle>
        {title} — <span className="text-slate-400">#{number}</span>
      </Subtitle>
      <div className="flex gap-2 align-middle">
        <StatusChip status={status} />
        <Span>{createdBy}</Span>
      </div>
    </header>
  )
}
