import { useUsersList } from "@/src/hooks"

import { Label } from "@rdx/label"
import { Span, Subtitle } from "@styled"
import { Avatar, Dropdown, DropdownMenuItemAlt } from "@ui"

import { CogwheelButton } from "../ui/CogwheelButton"

type IssueEdigAssigneeProps = {
  onAssigneeSelect: (assineeId: string) => void
  assigneeId?: string
}

const avatarClasses = `
  group-radix-highlighted:ring-2
  group-radix-highlighted:ring-yellow-400
  group-radix-focus-visible:ring-2
  group-radix-focus-visible:ring-yellow-400"
`

export function IssueEditAssignee({
  assigneeId,
  onAssigneeSelect
}: IssueEdigAssigneeProps) {
  console.log("Current assigneeId", assigneeId)
  const usersQuery = useUsersList()

  if (usersQuery.isLoading) {
    return (
      <div>
        <Subtitle>Assignee</Subtitle>
        <div className="h-8 w-8 animate-pulse rounded-full bg-slate-600" />
      </div>
    )
  }

  const candidates = usersQuery.data ?? []
  const assignee = candidates.find((u) => u.id === assigneeId)

  return (
    <div>
      <Label htmlFor="change assignee">
        <Subtitle>Assignee</Subtitle>
      </Label>
      <div className="flex space-x-3 lg:justify-between">
        <Avatar
          src={assignee?.profilePictureUrl}
          alt={`Current assignee profile picture`}
          initials=""
          shape="circle"
          size="sm"
        />
        <Dropdown triggerButton={CogwheelButton}>
          {candidates.map(({ id, name, profilePictureUrl }) => (
            <DropdownMenuItemAlt
              key={id}
              className="gap-x-3 items-center group"
              onSelect={() => onAssigneeSelect(id)}
            >
              <Avatar
                src={profilePictureUrl}
                alt={`Current assignee profile picture`}
                className={avatarClasses}
                shape="circle"
                size="sm"
              />
              <Span>{name}</Span>
            </DropdownMenuItemAlt>
          ))}
        </Dropdown>
      </div>
    </div>
  )
}
