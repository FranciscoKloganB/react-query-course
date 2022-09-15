import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from "@rdx/dropdown"
import { RoundButton } from "@styled"
import { Dropdown, LeftElement, RightElement } from "@ui"
import { NavLink } from "react-router-dom"
import { GoSettings, GoThreeBars } from "react-icons/go"
import { BiChevronRight } from "react-icons/bi"
import { actionableRoutes } from "@common/routes"

import type { MenuActions } from "@common/routes/types"

const hamburger = (
  <RoundButton aria-label="Open actions menu">
    <GoThreeBars />
  </RoundButton>
)

function RenderActions({ actions }: { actions: MenuActions }) {
  return (
    <>
      {actions.map(({ action, disabled, icon, path, shortcut }) => (
        <DropdownMenuItem key={action} disabled={!!disabled}>
          {icon && <LeftElement>{icon}</LeftElement>}
          <NavLink to={path}>{action}</NavLink>
          {shortcut && <RightElement>{shortcut}</RightElement>}
        </DropdownMenuItem>
      ))}
    </>
  )
}

export function ActionsMenu() {
  return (
    <Dropdown triggerButton={hamburger}>
      <>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <RenderActions actions={actionableRoutes.pages} />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <LeftElement>
              <GoSettings />
            </LeftElement>
            User Settings
            <RightElement>
              <BiChevronRight className="text-lg" />
            </RightElement>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
            <RenderActions actions={actionableRoutes.profile} />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Session</DropdownMenuLabel>
        <RenderActions actions={actionableRoutes.auth} />
      </>
    </Dropdown>
  )
}
