import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@rdx/dropdown"
import { useState } from "react"
import { BiChevronRight, BiCheck } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { GoPrimitiveDot } from "react-icons/go"
import tw from "tailwind-styled-components"

/**
 * FIXME: our highlighted/disabled selectors are not the same as the documented ones
 * "[data-highlighted] > &": { color: "white" },
 * "[data-disabled] &": { color: mauve.mauve8 }
 */
const RightSlot = tw.div`
  ml-auto
  pl-5
  text-yellow-400
  radix-highlighted:text-white
  radix-disabled:text-slate-400
`

/**  */
const IconButton = tw.button`
 inline-flex
 font-sans
 rounded-[100%]
 h-8
 w-8
 items-center
 justify-center
 text-yellow-400
 bg-white
 shadow-md
 focus:ring-2
 focus:ring-yellow-400
 hover:ring-2
 hover:ring-yellow-400
`

export function MobileNavigation() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState("pedro")

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
