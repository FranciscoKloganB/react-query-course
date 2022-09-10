import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import tw from "tailwind-styled-components"

const StyledContent = tw(TooltipPrimitive.Content)`
  inline-flex
  items-center
  rounded-md
  bg-white
  px-4
  py-2.5
  radix-side-bottom:animate-slide-up-fade
  radix-side-left:animate-slide-right-fade
  radix-side-right:animate-slide-left-fade
  radix-side-top:animate-slide-down-fade
  dark:bg-gray-800
`

const StyledArrow = tw(TooltipPrimitive.Arrow)`
  fill-current text-white dark:text-gray-800
`

const StyledContentContainer = tw.span`
  block text-xs font-sans leading-none text-gray-900 dark:text-gray-100
`

export const TooltipProvider = TooltipPrimitive.Provider
export const TooltipRoot = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger
export const TooltipContent = StyledContent
export const TooltipArrow = StyledArrow
export const TooltipContentContainer = StyledContentContainer

export type TooltipRootProps = TooltipPrimitive.TooltipProps
