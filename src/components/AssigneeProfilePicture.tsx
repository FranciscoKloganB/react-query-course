import { OnlineStatus } from "@enums"
import { getRandomOfEnum } from "@helpers/getRandomOfEnum"
import { useUser } from "@hooks"
import { Avatar } from "@ui"

export function AssigneeProfilePicture({ userId }: { userId: string }) {
  if (!userId) {
    return null
  }

  const userQuery = useUser(userId)

  return (
    <Avatar
      alt={`Assignee ${userQuery.data?.id} profile picture`}
      src={userQuery.data?.profilePictureUrl}
      shape="circle"
      size="md"
      status={getRandomOfEnum(OnlineStatus)}
    />
  )
}
