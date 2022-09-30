import clsx from "clsx"
import { FaUserAstronaut } from "react-icons/fa"

import { OnlineStatus } from "@enums"
import {
  AvatarFallBackInitials,
  AvatarFallback,
  AvatarImage,
  AvatarRoot
} from "@rdx/avatar"
import { Span, StatusOverlay, avatarVariants } from "@styled"
import type { AvatarVariantsShapes, AvatarVariantsSizes } from "@styled"

type AvatarProps = {
  alt: string
  src: string
  initials?: string
  size?: AvatarVariantsSizes
  shape?: AvatarVariantsShapes
  status?: OnlineStatus
}

/**
 * Renders an Avatar. When src is falsey or image can not be loaded, it will
 * instead try to render a placeholder with the avatar initials. If no initials
 * are provided, then it loads an Astronaut icon.
 */
export function Avatar({
  initials,
  src,
  alt = "avatar",
  shape = "rounded",
  size = "md",
  status = OnlineStatus.INACTIVE
}: AvatarProps) {
  return (
    <AvatarRoot $size={size}>
      <AvatarImage $shape={shape} alt={alt} src={src} />
      <StatusOverlay $size={size} $status={status} />
      <AvatarFallback $shape={shape} delayMs={600}>
        {initials ? (
          <AvatarFallBackInitials>{initials}</AvatarFallBackInitials>
        ) : (
          <Span>
            <FaUserAstronaut
              className={clsx(
                avatarVariants.sizes[size],
                "rounded-full bg-slate-400"
              )}
            />
          </Span>
        )}
      </AvatarFallback>
    </AvatarRoot>
  )
}
