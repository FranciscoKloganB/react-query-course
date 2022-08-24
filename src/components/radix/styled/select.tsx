import * as SelectPrimitive from "@radix-ui/react-select"
import tw from "tailwind-styled-components"
import styled from "styled-components"
import React from "react"

const StyledTrigger = tw(SelectPrimitive.SelectTrigger)`
  inline-flex
  items-center
  justify-center
  rounded
  p-4
  text-base
  h-9
  gap-5
  bg-bg-navy-blue
  text-white
  hover:bg-yellow-400
  focus:border-slate-600
  focus:border-2
  placeholder:text-white
`

const StyledIcon = tw(SelectPrimitive.SelectIcon)`
  hover:bg-yellow-400
`

const StyledContent = tw(SelectPrimitive.Content)`
  overflow-hidden bg-bg-navy-blue rounded-md
`

const StyledViewport = tw(SelectPrimitive.Viewport)`
  p-2
`

function Content({ children, ...props }: { children: React.ReactNode; props?: unknown }) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

const StyledItem = tw(SelectPrimitive.Item)`
  text-base
  text-white
  rounded-sm
  flex
  items-center
  h-6
  pr-8
  pl-6
  relative
  select-none
  disabled:text-slate-400
  disabled:pointer-events-none
  [&data-highlighted]:bg-yellow-400
  [&data-highlighted]:text-red-600
`
// &[data-disabled]:pointer-events-none?

const StyledLabel = tw(SelectPrimitive.Label)`
  py-0 px-6 text-xs leading-6 text-yellow-400
`

const StyledSeparator = tw(SelectPrimitive.Separator)`
  h-px bg-yellow-100 m-1
`

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  absolute left-0 w-6 inline-flex items-center justify-center
`
const scrollButtonStyles = `
  flex items-center justify-center h-6 bg-navy-blue text-yellow-400 cursor-default
`

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  ${scrollButtonStyles}
`

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  ${scrollButtonStyles}
`

// Exports
export const Select = SelectPrimitive.Root
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
