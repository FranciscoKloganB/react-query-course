import tw from "tailwind-styled-components"

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

// const contentStyles = {
//   minWidth: 220,
//   backgroundColor: "white",
//   borderRadius: 6,
//   padding: 5,
//   boxShadow:
//     "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
//   "@media (prefers-reduced-motion: no-preference)": {
//     animationDuration: "400ms",
//     animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
//     willChange: "transform, opacity",
//     '&[data-state="open"]': {
//       '&[data-side="top"]': { animationName: slideDownAndFade },
//       '&[data-side="right"]': { animationName: slideLeftAndFade },
//       '&[data-side="bottom"]': { animationName: slideUpAndFade },
//       '&[data-side="left"]': { animationName: slideRightAndFade }
//     }
//   }
// }
// motion-safe:duration-500
// motion-safe:ease-in-logarithimic
const contentStyles = tw.div`
  min-w-[220px]
  bg-white
  rounded-md
  p-2
  motion-safe:will-change-transform-opacity
  motion-safe:radix-state-open:radix-side-top:animate-slideDownAndFade
  motion-safe:radix-state-open:radix-side-right:animate-slideLeftAndFade
  motion-safe:radix-state-open:radix-side-bottom:animate-slideUpAndFade
  motion-safe:radix-state-open:radix-side-left:animate-slideRightAndFade
`

const StyledContent = tw(DropdownMenuPrimitive.Content)`
  ${() => contentStyles}
`

const StyledSubContent = tw(DropdownMenuPrimitive.SubContent)`
  ${() => contentStyles}
`

const StyledArrow = tw(DropdownMenuPrimitive.Arrow)`
  fill-white
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Content({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SubContent({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props}>{children}</StyledSubContent>
    </DropdownMenuPrimitive.Portal>
  )
}

const itemStyles = tw.div`
  relative
  flex
  font-xs
  h-6
  items-center
  leading-none
  py-0
  pr-2
  pl-6
  rounded
  select-none
  text-white
  radix-disabled:pointer-events-none
  radix-disabled:text-slate-400
  radix-highlighted:bg-yellow-400
  radix-highlighted:text-slate-900
`

const StyledItem = tw(DropdownMenuPrimitive.Item)`
  ${() => itemStyles}
`

const StyledCheckboxItem = tw(DropdownMenuPrimitive.CheckboxItem)`
${() => itemStyles}
`

const StyledRadioItem = tw(DropdownMenuPrimitive.RadioItem)`
${() => itemStyles}
`

const StyledSubTrigger = tw(DropdownMenuPrimitive.SubTrigger)`
  radix-state-open:bg-pink-400
  radix-state-open:text-red-600
  ${() => itemStyles}
`

const StyledLabel = tw(DropdownMenuPrimitive.Label)`
  py-0 pr-2 pl-6 text-xs leading-6 text-yellow-400 capitalize
`

const StyledSeparator = tw(DropdownMenuPrimitive.Separator)`
  h-px bg-yellow-400 m-1
`

const StyledItemIndicator = tw(DropdownMenuPrimitive.ItemIndicator)`
  absolute left-0 w-6 inline-flex items-center justify-center text-yellow-400
`

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuContent = Content
export const DropdownMenuItem = StyledItem
export const DropdownMenuCheckboxItem = StyledCheckboxItem
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
export const DropdownMenuRadioItem = StyledRadioItem
export const DropdownMenuItemIndicator = StyledItemIndicator
export const DropdownMenuLabel = StyledLabel
export const DropdownMenuSeparator = StyledSeparator
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuSubTrigger = StyledSubTrigger
export const DropdownMenuSubContent = SubContent
