import * as LabelPrimitive from "@radix-ui/react-label"
import tw from "tailwind-styled-components"

const StyledLabel = tw(LabelPrimitive.Root)`
  font-sans
  font-medium
  text-sm
  text-white
  select-none
`

export const Label = StyledLabel
