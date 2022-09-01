import { ProfilePicture } from "@ui"
import { useUser } from "@hooks"

export function AssigneeProfilePicture({ userId }: { userId: string }) {
  if (!userId) {
    return null
  }

  const userQuery = useUser(userId)

  return (
    <ProfilePicture
      alt={`Assignee ${userQuery.data?.id} profile picture`}
      src={userQuery.data?.profilePictureUrl}
    />
  )
}
