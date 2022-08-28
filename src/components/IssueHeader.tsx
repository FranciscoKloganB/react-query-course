import { IssueStatus } from "@enums"
import { Title } from "@styled"
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
      <Title>
        {title} — #{number}
      </Title>
      <StatusChip status={status} />
    </header>
  )
}
