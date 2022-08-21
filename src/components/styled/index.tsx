import Tooltip from "rc-tooltip"
import tw from "tailwind-styled-components"

export const AppContainer = tw.div`
  container mx-auto pr-4 pl-3 py-3 lg:pt-6
`

export const Border = tw.div`
  border rounded-lg my-3 py-2 border-slate-600
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
  text-purple-600
  border-purple-600
  bg-purple-400
  bg-opacity-25
  whitespace-nowrap
`

export const Heading = tw.h1`
  font-display text-4xl font-extrabold text-white text-center sm:text-5xl
`

export const Paragraph = tw.p`
  font-sans text-base tracking-tight text-white
`

export const Small = tw.small`
  font-sans tracking-tight text-slate-400
`

export const Search = tw.input`
  block
  w-full
  py-2
  pl-10
  pr-3
  text-sm
  placeholder-slate-500
  bg-white border
  border-slate-300
  rounded-md
  focus:outline-none
  focus:text-slate-900
  focus:placeholder-slate-400
  focus:ring-2
  focus:ring-yellow-400
  focus:border-yellow-400
  sm:text-sm
`

export const SearchContainer = tw.div`
  items-center justify-center
`

export const SearchIconContainer = tw.div`
  pl-3
  absolute
  flex
  left-0
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
  text-center
  md:text-left
  tracking-tight
`

export const Title = tw.h2`
  pt-4
  font-display
  font-bold
  text-white
  text-2xl
  text-center
  md:text-left
  sm:text-3xl
  tracking-tight
`

export const TooltipSpan = tw.span`
  text-xs
  font-sans
  text-gray-900
`

export { Tooltip }
