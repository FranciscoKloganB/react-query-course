import { useUser } from "@hooks"
import { ProfilePicture } from "@ui"
import { HorizontalDivider } from "@ui"
import { Border, Paragraph, Small, Span } from "@styled"
import { relativeDate } from "@helpers"

import ReactPlaceholder from "react-placeholder"
import { RectShape } from "react-placeholder/lib/placeholders"

const profilePictureSize = "lg"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const placeholder = (
  <>
    <RectShape className="w-100 animate-pulse rounded bg-slate-600" style={{ height: 24 }} />
    <HorizontalDivider />
    <RectShape className="w-100 animate-pulse rounded bg-slate-600" style={{ height: 24 }} />
  </>
)

export function Comment({ comment, createdBy, createdDate }: UserComment) {
  const userQuery = useUser(createdBy)

  return (
    <div className="mt-3">
      <div className="flex items-center gap-x-2">
        <div className="min-w-fit">
          <ProfilePicture
            src={userQuery.data?.profilePictureUrl}
            alt={`Commenter ${userQuery.data?.name} profile picture`}
            size={profilePictureSize}
          />
        </div>
        {
          <Border className="grow">
            {userQuery.isError ? (
              <Paragraph>
                <i className="text-sm text-red-200">Could not load user comment</i>
              </Paragraph>
            ) : (
              <ReactPlaceholder customPlaceholder={placeholder} ready={userQuery.isSuccess}>
                <>
                  <Small>{`${userQuery.data?.name} commented ${relativeDate(createdDate)}`}</Small>
                  <HorizontalDivider />
                  <Span>{comment}</Span>
                </>
              </ReactPlaceholder>
            )}
          </Border>
        }
      </div>
    </div>
  )
}
