import { ProfilePicture, ProfilePicturePlaceholder } from "@ui"
import { useUser } from "@hooks"

export function AssigneeProfilePicture({ userId }: { userId: string }) {
  if (!userId) {
    return null
  }

  const userQuery = useUser(userId)

  if (userQuery.isLoading || userQuery.isError) {
    return <ProfilePicturePlaceholder />
  }

  return (
    <ProfilePicture
      alt={`user ${userQuery.data.id} avatar`}
      src={userQuery.data.profilePictureUrl}
    />
  )
}
