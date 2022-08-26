import * as SelectPrimitive from "@radix-ui/react-select"
import tw from "tailwind-styled-components"
import React from "react"

/** Styles the trigger (button) that opens the Radix Select component. */
const StyledTrigger = tw(SelectPrimitive.SelectTrigger)`
  w-full
  md:w-56
  2xl:w-64
  inline-flex
  items-center
  justify-start
  rounded-md
  h-9
  gap-[5px]
  font-sans
  text-base
  md:text-sm
  leading-none
  bg-white
  border
  focus:border-yellow-400
  hover:border-yellow-400
  focus:outline-none
  hover:outline-none
  focus:ring-2
  focus:ring-yellow-400
  hover:ring-2
  hover:ring-yellow-400
  radix-placeholder:text-slate-600
  radix-placeholder:focus:text-slate-400
`

/** Styles the provided icon (currently applying no custom styles). */
const StyledIcon = tw(SelectPrimitive.SelectIcon)`
  pl-[15px]
  text-md
`

/** When the Select state is open, this is the parent element of all items selection panel. */
const StyledContent = tw(SelectPrimitive.Content)`
  overflow-hidden bg-navy-blue rounded-md
`

/** Container for the items within the dropdown. */
const StyledViewport = tw(SelectPrimitive.Viewport)`
  px-2 py-4
`

/** Renders the provided children as Select content when the Select has state open. */
function Content({ children, ...props }: { children: React.ReactNode; props?: unknown }) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

/** Renders a selectable item within the selection panel when Select state is open. */
const StyledItem = tw(SelectPrimitive.Item)`
  font-sans
  leading-none
  text-xs
  md:text-sm
  text-white
  rounded-md
  flex
  items-center
  h-6
  pr-8
  pl-6
  relative
  select-none
  hover:bg-yellow-400
  radix-disabled:pointer-events-none
  radix-disabled:text-slate-400
  radix-highlighted:bg-yellow-400
  radix-highlighted:text-slate-900
`

/** Styles the labels of a group of Selectable Items. */
const StyledLabel = tw(SelectPrimitive.Label)`
  py-0 px-6 text-xs leading-6 text-yellow-400 capitalize
`

/** Styles the seperators between groups Selectable Items. */
const StyledSeparator = tw(SelectPrimitive.Separator)`
  h-px bg-yellow-400 m-1
`

/**
 * When Select state is open, it styles the icon that indicates the option that was previously
 * selected.
 */
const StyledItemIndicator = tw(SelectPrimitive.ItemIndicator)`
  absolute left-0 w-6 inline-flex items-center justify-center text-yellow-400
`

/** Styles the panel arrow up */
const StyledScrollUpButton = tw(SelectPrimitive.ScrollUpButton)`
  flex
  items-center
  justify-center
  h-6
  bg-transparent
  text-yellow-400
  cursor-default
`

/** Styles the panel arrow down */
const StyledScrollDownButton = tw(SelectPrimitive.ScrollDownButton)`
  flex
  items-center
  justify-center
  h-6
  bg-transparent
  text-yellow-400
  cursor-default
`

// Exports
export const SelectRoot = SelectPrimitive.Root
export const SelectTrigger = StyledTrigger
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = StyledIcon
export const SelectContent = Content
export const SelectViewport = StyledViewport
export const SelectGroup = SelectPrimitive.Group
export const SelectItem = StyledItem
export const SelectItemText = SelectPrimitive.ItemText
export const SelectItemIndicator = StyledItemIndicator
export const SelectLabel = StyledLabel
export const SelectSeparator = StyledSeparator
export const SelectScrollUpButton = StyledScrollUpButton
export const SelectScrollDownButton = StyledScrollDownButton

export type SelectRootProps = SelectPrimitive.SelectProps
