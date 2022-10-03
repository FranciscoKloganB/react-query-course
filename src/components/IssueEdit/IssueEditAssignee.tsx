import { useUsersList } from "@/src/hooks"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { GoGear } from "react-icons/go"

import { Label } from "@rdx/label"
import { ButtonIcon, Subtitle } from "@styled"
import { Avatar, Icon } from "@ui"

type IssueEdigAssigneeProps = {
  initialAssigneeId?: string
}

export function IssueEditAssignee({
  initialAssigneeId
}: IssueEdigAssigneeProps) {
  const [assigneeId, setAssigneeId] = useState(initialAssigneeId)
  const queryClient = useQueryClient()
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
          shape="circle"
          size="sm"
        />
        <ButtonIcon className="ml-4 hover:animate-spin-slow">
          <Icon label="change assignee button">
            <GoGear />
          </Icon>
        </ButtonIcon>
      </div>
      {/* <Select
            id="issue status filters"
            placeholder="Filter issues"
            onValueChange={setAssigneeId}
          >
            <div key={group.label}>
              <SelectGroup group={group} />
            </div>
          </Select> */}
    </div>
  )
}
