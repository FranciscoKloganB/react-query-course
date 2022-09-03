import React from "react"
import { BiCheck, BiChevronRight } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoPrimitiveDot } from "react-icons/go"

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
  motion-safe:radix-state-open:radix-side-right::animate-slideLeftAndFade
  motion-safe:radix-state-open:radix-side-bottom:animate-slideUpAndFade
  motion-safe:radix-state-open:radix-side-left:animate-slideRightAndFade

`

const StyledContent = styled(DropdownMenuPrimitive.Content, { ...contentStyles })

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "white"
})

function Content({ children, ...props }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  )
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent, { ...contentStyles })

function SubContent(props) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  )
}

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none"
  },

  "&[data-highlighted]": {
    backgroundColor: violet.violet9,
    color: violet.violet1
  }
}

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles })
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles })
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles })
const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11
  },
  ...itemStyles
})

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11
})

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5
})

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
})

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

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: mauve.mauve11,
  "[data-highlighted] > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 }
})

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 35,
  width: 35,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` }
})

export const DropdownMenuDemo = () => {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
  const [urlsChecked, setUrlsChecked] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")

  return (
    <div className="lg:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <GiHamburgerMenu />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
            New Tab <RightSlot>⌘+T</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            New Private Window <RightSlot>⇧+⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              More Tools
              <RightSlot>
                <BiChevronRight />
              </RightSlot>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
              <DropdownMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuItemIndicator>
              <BiCheck />
            </DropdownMenuItemIndicator>
            Show Bookmarks <RightSlot>⌘+B</RightSlot>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
            <DropdownMenuItemIndicator>
              <BiCheck />
            </DropdownMenuItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>People</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenuRadioItem value="pedro">
              <DropdownMenuItemIndicator>
                <GoPrimitiveDot />
              </DropdownMenuItemIndicator>
              Pedro Duarte
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="colm">
              <DropdownMenuItemIndicator>
                <GoPrimitiveDot />
              </DropdownMenuItemIndicator>
              Colm Tuite
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default DropdownMenuDemo
