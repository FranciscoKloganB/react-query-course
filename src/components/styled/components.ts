import tw from "tailwind-styled-components"

import { inputLikeFieldStyles } from "@common/styled/constants"
import { buttonVariants, labelVariants, statusOverlayVariants } from "@styled"
import type {
  ButtonVariants,
  LabelVariantsColors,
  StatusOverlayVariantsColors,
  StatusOverlayVariantsSizes
} from "@styled"

export const Border = tw.div`
  border rounded-lg p-2 border-slate-600
`

export const Button = tw.button`
  min-w-[128px]
  max-w-[192px]
  px-4
  py-1
  rounded
  font-sans
  font-medium
  text-sm
  leading-7
  focus-visible:outline-1
  focus-visible:outline-yellow-400
  ${({ $variant }: { $variant: ButtonVariants }) => buttonVariants[$variant]}
`

export const ButtonIcon = tw.button`
  flex-shrink-0
  p-2
  bg-transparent
  rounded-full
  focus:outline-none
  enabled:hover:ring
  enabled:hover:ring-yellow-400
  enabled:focus-visible:ring
  enabled:focus-visible:ring-yellow-400
`

export const Chip = tw.button`
  flex
  max-w-xs
  py-[2px]
  px-2
  text-xs
  text-center
  font-sans
  font-semibold
  border
  rounded-[999px]
  bg-opacity-25
  whitespace-nowrap
  ${(p: { $color: LabelVariantsColors }) =>
    labelVariants.colors[p.$color] ?? labelVariants.colors.default}
`

export const Heading = tw.h1`
  font-display text-4xl font-extrabold text-white text-center sm:text-5xl
`

export const InputContainer = tw.div`
  flex flex-wrap space-x-4 items-center
`

export const Input = tw.input`
  items-center
  justify-center
  py-0
  px-3
  h-8
  block
  font-sans
  sm:text-sm
  border-gray-300
  shadow-sm
  ${({ $error }: { $error: boolean }) =>
    `${inputLikeFieldStyles} ${$error ? "bg-red-300" : ""}`}
`

export const StatusOverlay = tw.span`
  absolute
  top-0
  right-0
  block
  rounded-full
  ring
  ring-white
  ${(p: {
    $size: StatusOverlayVariantsSizes
    $status: StatusOverlayVariantsColors
  }) =>
    `${statusOverlayVariants.colors[p.$status]} ${
      statusOverlayVariants.sizes[p.$size]
    }`}
`

export const Paragraph = tw.p`
  font-sans text-base tracking-tight text-white
`

export const RoundButton = tw.button`
  inline-flex
  font-sans
  rounded-[100%]
  h-8
  w-8
  items-center
  justify-center
  text-yellow-400
  bg-white
  shadow-md
  focus-visible:ring
  focus-visible:ring-yellow-400
  hover:ring
  hover:ring-yellow-400
`

export const Small = tw.small`
  font-sans tracking-tight text-slate-400
`

export const Search = tw.input`
  block
  w-full
  h-9
  pl-10
  pr-3
  ${() => inputLikeFieldStyles}
`

export const SearchContainer = tw.div`
  items-center justify-center text-md text-slate-600
`

export const SearchIconContainer = tw.div`
  absolute
  flex
  left-4
  inset-y-0
  items-center
  pointer-events-none
`

export const Span = tw.span`
  font-sans text-base tracking-tight text-white
`

export const Subtitle = tw.h3`
  font-display
  font-semibold
  text-white
  my-2
  text-xl
  md:text-left
  tracking-tight
`

export const TextArea = tw.textarea`
  block
  w-full
  min-h-[192px]
  ${() => inputLikeFieldStyles}
`

export const Title = tw.h2`
  mt-4
  font-display
  font-bold
  text-white
  text-2xl
  md:text-left
  sm:text-3xl
  tracking-tight
`
