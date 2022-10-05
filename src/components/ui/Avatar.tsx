import clsx from "clsx"
import { FaUserAstronaut } from "react-icons/fa"

import { OnlineStatus } from "@enums"
import {
  AvatarContainer,
  AvatarFallBackInitials,
  AvatarFallback,
  AvatarImage,
  AvatarRoot
} from "@rdx/avatar"
import { Span, StatusOverlay, avatarVariants } from "@styled"
import type { AvatarVariantsShapes, AvatarVariantsSizes } from "@styled"

type AvatarProps = {
  alt: string
  initials?: string
  size?: AvatarVariantsSizes
  shape?: AvatarVariantsShapes
  src?: string | URL
  status?: OnlineStatus
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

/**
 * Renders an Avatar. When src is falsey or image can not be loaded, it will
 * instead try to render a placeholder with the avatar initials. If no initials
 * are provided, then it loads an Astronaut icon.
 */
export function Avatar({
  initials,
  src,
  status,
  alt = "avatar",
  shape = "rounded",
  size = "md",
  ...rest
}: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarRoot $size={size}>
        <AvatarImage $shape={shape} alt={alt} src={src} {...rest} />
        {!!status && <StatusOverlay $size={size} $status={status} />}
        <AvatarFallback $shape={shape} delayMs={600}>
          {typeof initials === "string" ? (
            <AvatarFallBackInitials {...rest}>
              {initials}
            </AvatarFallBackInitials>
          ) : (
            <Span>
              <FaUserAstronaut
                {...rest}
                className={clsx(
                  avatarVariants.sizes[size],
                  rest.className,
                  "rounded-full bg-slate-400 self-center"
                )}
              />
            </Span>
          )}
        </AvatarFallback>
      </AvatarRoot>
    </AvatarContainer>
  )
}
