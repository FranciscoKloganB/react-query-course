import { OnlineStatus } from "@enums"
import { AvatarVariants, Span } from "@styled"
import clsx from "clsx"
import { StatusOverlay } from "@styled"
import { FaUserAstronaut } from "react-icons/fa"

type ProfilePictureProps = {
  alt: string
  src: string
  size?: keyof typeof AvatarVariants
  status?: OnlineStatus
}

export function ProfilePicture({
  alt,
  src,
  size = "sm",
  status = OnlineStatus.INACTIVE
}: ProfilePictureProps) {
  const classes = clsx(AvatarVariants[size], "rounded-full", !src && "bg-slate-400")
  return (
    <span className="relative inline-block">
      {src ? (
        <img className={classes} src={src} alt={alt} />
      ) : (
        <Span>
          <FaUserAstronaut className={classes} />
        </Span>
      )}
      <StatusOverlay $size={size} $status={status} />
    </span>
  )
}
