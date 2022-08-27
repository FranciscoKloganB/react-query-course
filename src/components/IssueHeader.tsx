import { IssueStatus } from "../enums"
import { Title } from "./styled"

type IssueHeaderProps = {
  comments: string[]
  createdBy: string
  createdDate: string
  number: number
  title: string
  status?: IssueStatus
}

export function IssueHeader({ number, title, status = IssueStatus.TODO }: IssueHeaderProps) {
  return (
    <header>
      <Title>{title}</Title>
    </header>
  )
}
