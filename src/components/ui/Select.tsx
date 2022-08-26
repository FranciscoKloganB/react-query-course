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

export function Select() {
  return (
    <div className="flex justify-start lg:justify-center">
      <SelectRoot>
        <SelectTrigger aria-label="Food">
          <SelectIcon>
            <BiChevronDown className="text-xl" />
          </SelectIcon>
          <SelectValue placeholder="select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <BiChevronUp className="text-xl" />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                <SelectItemText>Apple</SelectItemText>
                <SelectItemIndicator>
                  <BiCheck />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="aubergine">
                <SelectItemText>Aubergine</SelectItemText>
                <SelectItemIndicator>
                  <BiCheck />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="leek">
                <SelectItemText>leek</SelectItemText>
                <SelectItemIndicator>
                  <BiCheck />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            <BiChevronDown className="text-xl" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectRoot>
    </div>
  )
}
