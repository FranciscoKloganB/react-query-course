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
import { IssueStatus } from "@enums"

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

/** To take control of the rendering logic use `value` prop instead of `defautlValue` prop */
export function Select(props: SelectProps) {
  const lastOfGroups = props.groups.length - 1

  return (
    <div className="flex">
      <SelectRoot
        defaultValue={props.defaultValue}
        onValueChange={props.onValueChange}
        value={props.value}
      >
        <SelectTrigger aria-label={props.ariaLabel}>
          <SelectIcon>
            <BiChevronDown className="text-xl" />
          </SelectIcon>
          {props.defaultValue ? (
            <SelectValue placeholder={props.placeholder} />
          ) : (
            <SelectValue
              aria-label={`Select ${props.value}`}
              placeholder={props.placeholder}
            >
              {IssueStatus[props.value as keyof typeof IssueStatus]}
            </SelectValue>
          )}
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
