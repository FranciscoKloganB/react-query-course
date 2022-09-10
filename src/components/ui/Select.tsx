import { BiCheck, BiChevronDown, BiChevronUp } from "react-icons/bi"
import {
  SelectRoot,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
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
  ariaLabel: string
  groups: SelectGroup[]
  placeholder: string
} & SelectRootProps

function __RenderGroup__({ group }: { group: SelectGroup }) {
  return (
    <>
      <SelectGroup>
        <SelectLabel>{group.label}</SelectLabel>
        {group.items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            <SelectItemText>{item.display}</SelectItemText>
            <SelectItemIndicator>
              <BiCheck />
            </SelectItemIndicator>
          </SelectItem>
        ))}
      </SelectGroup>
    </>
  )
}

export function Select(props: SelectProps) {
  const lastOfGroups = props.groups.length - 1

  return (
    <div className="flex">
      <SelectRoot defaultValue={props.defaultValue} onValueChange={props.onValueChange}>
        <SelectTrigger aria-label={props.ariaLabel}>
          <SelectIcon>
            <BiChevronDown className="text-xl" />
          </SelectIcon>
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <BiChevronUp className="text-xl" />
          </SelectScrollUpButton>
          <SelectViewport>
            {props.groups.map((group, index) => (
              <div key={group.label}>
                <__RenderGroup__ group={group} />
                {index !== lastOfGroups && <SelectSeparator />}
              </div>
            ))}
          </SelectViewport>
          <SelectScrollDownButton>
            <BiChevronDown className="text-xl" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectRoot>
    </div>
  )
}
