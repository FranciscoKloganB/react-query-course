import { FaSpinner } from "react-icons/fa"
import { AiOutlineWarning } from "react-icons/ai"
import { Tooltip, TooltipSpan } from "@components/styled"
import { ProfilePicture } from "./ProfilePicture"
import { UseQueryResult } from "react-query"

export function AssigneeProfilePicture({
  userQuery
}: {
  userQuery: UseQueryResult<User, unknown>
}) {
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

  if (userQuery.isSuccess) {
    return (
      <ProfilePicture
        alt={`user ${userQuery.data.id} avatar`}
        src={userQuery.data.profilePictureUrl}
      />
    )
  }

  return null
}
