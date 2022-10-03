import { useUsersList } from "@/src/hooks"
import { GoGear } from "react-icons/go"
import ReactPlaceholder from "react-placeholder/lib"

import { Label } from "@rdx/label"
import { ButtonIcon, Subtitle } from "@styled"
import { Avatar, Icon } from "@ui"

type IssueEdigAssigneeProps = {
  assigneeId?: string
}

const placeholder = (
  <div className="h-8 w-8 animate-pulse rounded-full bg-slate-600" />
)

export function IssueEditAssignee({ assigneeId }: IssueEdigAssigneeProps) {
  const usersQuery = useUsersList()

  if (usersQuery.isError) {
    return null
  }

  const candidates = usersQuery.data ?? []
  const assignee = candidates.find((u) => u.id === assigneeId)

  return (
    <div>
      <Label htmlFor="change assignee">
        <Subtitle>Assignee</Subtitle>
      </Label>
      <div className="flex space-x-3 lg:justify-between">
        <ReactPlaceholder
          customPlaceholder={placeholder}
          ready={usersQuery.isSuccess}
        >
          <Avatar
            src={assignee?.profilePictureUrl}
            alt={`Current assignee profile picture`}
            shape="circle"
            size="sm"
          />
          <ButtonIcon className="ml-4 hover:animate-spin-slow">
            <Icon label="change assignee button">
              <GoGear />
            </Icon>
          </ButtonIcon>
        </ReactPlaceholder>
      </div>
    </div>
  )
}
