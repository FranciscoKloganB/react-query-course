import tw from "tailwind-styled-components"

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

const contentStyles = `
  w-48
  rounded-md
  shadow-md
  bg-navy-blue-400
  p-2
  motion-safe:will-change-transform-opacity
  motion-safe:radix-state-open:radix-side-top:animate-slide-down-fade
  motion-safe:radix-state-open:radix-side-bottom:animate-slide-up-fade
  motion-safe:radix-state-open:radix-side-right:animate-slide-left-fade
  motion-safe:radix-state-open:radix-side-left:animate-slide-right-fade
`

/** When the Select state is open, this is the parent element of all items selection panel. */
const StyledContent = tw(DropdownMenuPrimitive.Content)`
  ${() => contentStyles}
`

/** When the Select state is open, this is the parent element of all items in subselection panels. */
const StyledSubContent = tw(DropdownMenuPrimitive.SubContent)`
  ${() => contentStyles}
`

/** Paints the arrow that indicates to which Dropdown Trigger the StyledContent belongs to. */
const StyledArrow = tw(DropdownMenuPrimitive.Arrow)`
fill-navy-blue-400
`

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
  radix-state-open:bg-yellow-400
  radix-state-open:text-slate-900
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
