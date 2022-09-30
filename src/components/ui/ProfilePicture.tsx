import clsx from "clsx"

import { OnlineStatus } from "@enums"
import { avatarVariants } from "@styled"
import type { AvatarVariantsSizes } from "@styled"

import { Avatar } from "./Avatar"

type ProfilePictureProps = {
  alt: string
  src?: string
  size?: AvatarVariantsSizes
  status?: OnlineStatus
}

type ProfilePicturePlaceholderProps = {
  size?: ProfilePictureProps["size"]
}

export function ProfilePicture({
  alt,
  src = "",
  size = "sm",
  status = OnlineStatus.INACTIVE
}: ProfilePictureProps) {
  const classes = clsx(
    avatarVariants.sizes[size],
    "rounded-full",
    !src && "bg-slate-400"
  )

  return (
    <span className="relative inline-block">
      <Avatar alt={alt} shape="circle" size={size} src={src} status={status} />
    </span>
  )
}
