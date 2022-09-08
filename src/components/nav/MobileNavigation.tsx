import {
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
import { Gi3DGlasses, GiHamburgerMenu } from "react-icons/gi"
import { GoPrimitiveDot } from "react-icons/go"
import { RoundButton } from "@styled"
import { Dropdown, DropdownItem, DropdownRightElement } from "@ui"

const hamburger = (
  <RoundButton aria-label="Open mobile navigation menu">
    <GiHamburgerMenu />
  </RoundButton>
)

export function MobileNavigation() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState("pedro")

  return (
    <div className="lg:hidden">
      <Dropdown triggerButton={hamburger}>
        <>
          <DropdownMenuItem>
            <DropdownItem icon={<Gi3DGlasses />} shortcut="⌘+T">
              New Tab
            </DropdownItem>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window <DropdownRightElement>⌘+N</DropdownRightElement>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            New Private Window <DropdownRightElement>⇧+⌘+N</DropdownRightElement>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              More Tools
              <DropdownRightElement>
                <BiChevronRight />
              </DropdownRightElement>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
              <DropdownMenuItem>
                Save Page As… <DropdownRightElement>⌘+S</DropdownRightElement>
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
            Show Bookmarks <DropdownRightElement>⌘+B</DropdownRightElement>
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
        </>
      </Dropdown>
    </div>
  )
}
