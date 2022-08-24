import { BiCheck, BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi"
import {
  Select as SelectContainer,
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
} from "./styled/select"

export function Select() {
  return (
    <SelectContainer>
      <SelectTrigger aria-label="Food">
        <SelectValue placeholder="Select a fruit…" />
        <SelectIcon>
          <BiChevronDownCircle />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent>
        <SelectScrollUpButton>
          <BiChevronUpCircle />
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
            <SelectItem value="banana">
              <SelectItemText>Banana</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="blueberry">
              <SelectItemText>Blueberry</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="grapes">
              <SelectItemText>Grapes</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="pineapple">
              <SelectItemText>Pineapple</SelectItemText>
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
            <SelectItem value="broccoli">
              <SelectItemText>Broccoli</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="carrot" disabled>
              <SelectItemText>Carrot</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="courgette">
              <SelectItemText>Courgette</SelectItemText>
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

          <SelectSeparator />

          <SelectGroup>
            <SelectLabel>Meat</SelectLabel>
            <SelectItem value="beef">
              <SelectItemText>Beef</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="chicken">
              <SelectItemText>Chicken</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="lamb">
              <SelectItemText>Lamb</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
            <SelectItem value="pork">
              <SelectItemText>Pork</SelectItemText>
              <SelectItemIndicator>
                <BiCheck />
              </SelectItemIndicator>
            </SelectItem>
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton>
          <BiChevronDownCircle />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectContainer>
  )
}
