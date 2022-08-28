import { Link as RouterLink } from "react-router-dom"
import tw from "tailwind-styled-components"

export const Link = tw(RouterLink)`
  text-white
  font-sans
  text-sm
  md:text-base
  underline
  underline-offset-4
 hover:text-yellow-400
 focus:text-yellow-400
`
