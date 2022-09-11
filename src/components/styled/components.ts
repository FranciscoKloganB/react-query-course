import tw from "tailwind-styled-components"
import { labelVariants, statusOverlayVariants } from "@styled"
import type {
  LabelVariantsColors,
  StatusOverlayVariantsColors,
  StatusOverlayVariantsSizes
} from "@styled"
import { inputLikeFieldStyles } from "@common/styled/constants"

export const Border = tw.div`
  border rounded-lg p-2 border-slate-600
`

// TODO: Improve this button, it is very ugly - not very intuitive to hover as yellow
export const Button = tw.div`
  max-w-fit
  px-4
  py-1
  hover:border-yellow-400
  focus-visible:border
  rounded-md
  bg-white
  font-sans
  text-sm
  leading-none
  text-slate-900
  focus-visible:ring-2
  focus-visible:outline-none
  focus-visible:ring-yellow-400
  focus-visible:border-yellow-400
  focus-visible:text-slate-900
  focus-visible:placeholder:text-slate-400
  placeholder:text-slate-600
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

export const StatusOverlay = tw.span`
  absolute
  top-0
  right-0
  block
  rounded-full
  ring-2
  ring-white
  ${(p: { $size: StatusOverlayVariantsSizes; $status: StatusOverlayVariantsColors }) =>
    `${statusOverlayVariants.colors[p.$status]} ${statusOverlayVariants.sizes[p.$size]}`}
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
  focus-visible:ring-2
  focus-visible:ring-yellow-400
  hover:ring-2
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
  rounded-md
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
  text-white py-4
  text-xl
  md:text-left
  tracking-tight
`

export const Title = tw.h2`
  pt-4
  font-display
  font-bold
  text-white
  text-2xl
  md:text-left
  sm:text-3xl
  tracking-tight
`
