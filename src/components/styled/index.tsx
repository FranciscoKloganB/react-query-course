import tw from "tailwind-styled-components"

export const AppContainer = tw.div`
  container mx-auto px-4 py-12
`

export const Border = tw.div`
  border-[1px] rounded-lg my-3 py-2 border-slate-600
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
  border-[1px]
  rounded-[999px]
  text-purple-600
  border-purple-600
  bg-purple-400
  bg-opacity-25
  whitespace-nowrap
`

export const Heading = tw.h1`
  font-display text-4xl font-extrabold text-white text-center sm:text-6xl
`

export const Title = tw.h2`
  pt-4
  font-display
  font-bold
  text-white
  text-3xl
  text-center
  lg:text-left
  sm:text-4xl
  tracking-tight
`

export const Subtitle = tw.h3`
  font-display text-2xl font-semibold tracking-tight text-white py-4
`

export const Paragraph = tw.p`
  font-sans text-lg tracking-tight text-white
`

export const Small = tw.small`
  font-sans tracking-tight text-slate-400
`

export const Span = tw.span`
  font-sans text-lg tracking-tight text-white
`
