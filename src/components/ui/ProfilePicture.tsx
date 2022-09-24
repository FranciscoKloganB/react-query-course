import clsx from "clsx"
import { FaUserAstronaut } from "react-icons/fa"

import { OnlineStatus } from "@enums"
import { Span, avatarVariants } from "@styled"
import { StatusOverlay } from "@styled"
import type { AvatarVariants } from "@styled"

type ProfilePictureProps = {
  alt: string
  src?: string
  size?: AvatarVariants
  status?: OnlineStatus
}

type ProfilePicturePlaceholderProps = {
  size?: ProfilePictureProps["size"]
}

const defaultSize = "sm"

export function ProfilePicturePlaceholder({
  size = defaultSize
}: ProfilePicturePlaceholderProps) {
  const classes = clsx(avatarVariants[size], "rounded-full bg-slate-400")

  return (
    <Span>
      <FaUserAstronaut className={classes} />
    </Span>
  )
}

export function ProfilePicture({
  alt,
  src = "",
  size = defaultSize,
  status = OnlineStatus.INACTIVE
}: ProfilePictureProps) {
  const classes = clsx(
    avatarVariants[size],
    "rounded-full",
    !src && "bg-slate-400"
  )

  return (
    <span className="relative inline-block">
      {src ? (
        <img className={classes} src={src} alt={alt} />
      ) : (
        <ProfilePicturePlaceholder size={size} />
      )}
      <StatusOverlay $size={size} $status={status} />
    </span>
  )
}
