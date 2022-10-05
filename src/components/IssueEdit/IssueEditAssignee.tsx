import { useUsersList } from "@/src/hooks"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import { Label } from "@rdx/label"
import { Span, Subtitle } from "@styled"
import { Avatar, Dropdown, DropdownMenuItemAlt } from "@ui"

import { CogwheelButton } from "../ui/CogwheelButton"

type IssueEdigAssigneeProps = {
  initialAssigneeId?: string
}

const avatarClasses = `
  group-radix-highlighted:ring-2
  group-radix-highlighted:ring-yellow-400
  group-radix-focus-visible:ring-2
  group-radix-focus-visible:ring-yellow-400"
`

export function IssueEditAssignee({
  initialAssigneeId
}: IssueEdigAssigneeProps) {
  console.log("initialAssigneeId", initialAssigneeId)
  const [assigneeId, setAssigneeId] = useState(initialAssigneeId)
  const usersQuery = useUsersList()
  const queryClient = useQueryClient()

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
              onSelect={() => setAssigneeId(id)}
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
