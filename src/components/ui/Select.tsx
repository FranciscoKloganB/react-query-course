import { forwardRef } from "react"
import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi"

import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from "@rdx/select"
import type { SelectRootProps } from "@rdx/select"

type SelectGroup = {
  label: string
  items: Array<{
    display: string
    value: string
  }>
}

type SelectProps = {
  id: string
  controlled?: boolean
  placeholder?: string
} & SelectRootProps

type SelectItemProps = {
  children: React.ReactNode
  value: unknown
  props?: { [key: string]: unknown }
}

/** To take control of the rendering logic use `value` prop instead of `defautlValue` prop */
const ForwardSelect = forwardRef(
  ({ children, placeholder, ...props }: SelectProps, forwardedRef) => {
    return (
      <SelectRoot {...props}>
        <SelectTrigger id={props.id} ref={forwardedRef}>
          <SelectIcon>
            <BiChevronDown className="text-xl" />
          </SelectIcon>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <BiChevronUp className="text-xl" />
          </SelectScrollUpButton>
          <SelectViewport>{children}</SelectViewport>
          <SelectScrollDownButton>
            <BiChevronDown className="text-xl" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectRoot>
    )
  }
)
ForwardSelect.displayName = "ForwardSelect"

const ForwardSelectItem = forwardRef(
  ({ children, value, ...props }: SelectItemProps, forwardedRef) => {
    return (
      <SelectItem value={value} {...props} ref={forwardedRef}>
        <SelectItemText>{children}</SelectItemText>
        <SelectItemIndicator>
          <BiCheck />
        </SelectItemIndicator>
      </SelectItem>
    )
  }
)
ForwardSelectItem.displayName = "ForwardSelectItem"

function RenderSelectGroup({ group }: { group: SelectGroup }) {
  return (
    <>
      <SelectGroup>
        <SelectLabel>{group.label}</SelectLabel>
        {group.items.map((item) => (
          <ForwardSelectItem key={item.value} value={item.value}>
            {item.display}
          </ForwardSelectItem>
        ))}
      </SelectGroup>
    </>
  )
}

export {
  ForwardSelect as Select,
  ForwardSelectItem as SelectItem,
  RenderSelectGroup as SelectGroup
}
