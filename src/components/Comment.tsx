import { useUser } from "@hooks"
import { Dots, ProfilePicture } from "./ui"
import { HorizontalDivider } from "./ui/HorizontalDivider"
import { Border, Paragraph, Small, Span } from "@styled"
import { relativeDate } from "../helpers/relativeDate"

export function Comment({ comment, createdBy, createdDate }: UserComment) {
  const userQuery = useUser(createdBy)

  if (userQuery.isLoading) {
    return <Dots />
  }

  return (
    <div className="mt-3">
      <div className="flex items-center gap-x-2">
        <ProfilePicture
          src={userQuery.data?.profilePictureUrl || ""}
          alt={`Commenter ${userQuery.data?.name} profile picture`}
          size="lg"
        />
        <Border>
          {userQuery.isSuccess ? (
            <>
              <Small>{`${userQuery.data.name} commented ${relativeDate(createdDate)}`}</Small>
              <HorizontalDivider />
              <Span>{comment}</Span>
            </>
          ) : (
            <Paragraph>
              <i className="text-sm text-red-200">Could not load user comment</i>
            </Paragraph>
          )}
        </Border>
      </div>
    </div>
  )
}
