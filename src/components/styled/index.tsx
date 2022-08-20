import tw from "tailwind-styled-components"

export const AppContainer = tw.div`
  container mx-auto px-4 py-12
`

export const Border = tw.div`
  border-[1px] rounded-lg my-3 py-2 border-slate-600
`

export const Heading = tw.h1`
  font-display text-5xl font-extrabold text-white sm:text-6xl
`

export const Title = tw.h2`
  font-display text-4xl font-bold tracking-tight text-white pt-4
`

export const Subtitle = tw.h3`
  font-display text-2xl font-semibold tracking-tight text-white py-4
`

export const Paragraph = tw.p`
  text-lg tracking-tight text-white
`

export const Small = tw.small`
  tracking-tight text-slate-400
`

export const Span = tw.span`
  text-lg tracking-tight text-white
`
