import { relativeDate } from "@helpers"
import { useUser } from "@hooks"
import { Border, Paragraph, Small, Span } from "@styled"
import { Avatar, HorizontalDivider } from "@ui"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const placeholder = (
  <>
    <div className="w-100 h-6 animate-pulse rounded bg-slate-600" />
    <HorizontalDivider />
    <div className="w-100 h-6 animate-pulse rounded bg-slate-600" />
  </>
)

export function Comment({ comment, createdBy, createdDate }: UserComment) {
  const userQuery = useUser(createdBy)

  return (
    <div className="mt-3">
      <div className="flex items-center gap-x-2">
        <div className="min-w-fit">
          <Avatar
            src={userQuery.data?.profilePictureUrl}
            alt={`Commenter ${userQuery.data?.name} profile picture`}
            shape="circle"
            size="lg"
          />
        </div>
        {
          <Border className="grow">
            {userQuery.isLoading ? (
              placeholder
            ) : userQuery.isError ? (
              <Paragraph>
                <i className="text-sm text-red-200">
                  Could not load user comment
                </i>
              </Paragraph>
            ) : (
              <>
                <Small>{`${userQuery.data?.name} commented ${relativeDate(
                  createdDate
                )}`}</Small>
                <HorizontalDivider />
                <Span>{comment}</Span>
              </>
            )}
          </Border>
        }
      </div>
    </div>
  )
}
