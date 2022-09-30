import * as AvatarPrimitive from "@radix-ui/react-avatar"
import tw from "tailwind-styled-components"

import {
  AvatarVariantsShapes,
  AvatarVariantsSizes,
  avatarVariants
} from "@styled"

const StyledFallback = tw(AvatarPrimitive.Fallback)`
  flex
  h-full
  w-full
  items-center
  justify-center
  bg-white
  dark:bg-gray-800
  ${({ $shape }: { $shape: AvatarVariantsShapes }) =>
    avatarVariants.shapes[$shape]}
`

const StyledFallbackInitials = tw.span`
  text-sm
  font-medium
  uppercase
  text-gray-700
  dark:text-gray-400
`

const StyledImage = tw(AvatarPrimitive.Image)`
  h-full
  w-full
  object-cover
  ${({ $shape }: { $shape: AvatarVariantsShapes }) =>
    avatarVariants.shapes[$shape]}
`

const StyledRoot = tw(AvatarPrimitive.Root)`
  relative inline-flex
  ${({ $size }: { $size: AvatarVariantsSizes }) => avatarVariants.sizes[$size]}
`

export const AvatarContainer = tw.span`relative inline-block`
export const AvatarFallback = StyledFallback
export const AvatarFallBackInitials = StyledFallbackInitials
export const AvatarImage = StyledImage
export const AvatarRoot = StyledRoot
