import { OnlineStatus } from "@/src/enums"
import { AvatarVariants } from "@components/styled/variants"
import clsx from "clsx"
import { StatusOverlay } from "../styled"

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
  return (
    <span className="relative inline-block">
      <img className={clsx(AvatarVariants[size], "rounded-full")} src={src} alt={alt} />
      <StatusOverlay $size={size} $status={status} />
    </span>
  )
}
