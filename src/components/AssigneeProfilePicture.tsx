import { FaSpinner } from "react-icons/fa"
import { AiOutlineWarning } from "react-icons/ai"
import { Tooltip, TooltipSpan } from "@styled"
import { ProfilePicture } from "@ui"
import { useUser } from "@hooks"

export function AssigneeProfilePicture({ userId }: { userId: string }) {
  if (!userId) {
    return null
  }

  const userQuery = useUser(userId)

  if (userQuery.isLoading) {
    return <FaSpinner className="animate-spin text-white" />
  }

  if (userQuery.isError) {
    return (
      <Tooltip
        placement="top"
        trigger={["click"]}
        overlay={<TooltipSpan>Unable to load user avatar</TooltipSpan>}
      >
        <AiOutlineWarning className="text-yellow-600" />
      </Tooltip>
    )
  }

  return (
    <ProfilePicture
      alt={`user ${userQuery.data.id} avatar`}
      src={userQuery.data.profilePictureUrl}
    />
  )
}
