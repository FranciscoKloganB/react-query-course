import { Fragment } from "react"
import { BiChevronRight } from "react-icons/bi"
import { GoSettings, GoThreeBars } from "react-icons/go"
import { NavLink } from "react-router-dom"

import { menuActions } from "@common/routes/menu-actions"
import type { MenuAction } from "@common/routes/types"
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger
} from "@rdx/dropdown"
import { RoundButton } from "@styled"
import { Dropdown, LeftElement, RightElement } from "@ui"

const hamburger = (
  <RoundButton aria-label="Open actions menu">
    <GoThreeBars />
  </RoundButton>
)

function RenderActions({ actions }: { actions: MenuAction[] }) {
  return (
    <Fragment>
      {actions.map(({ action, disabled, icon, path, shortcut }) => (
        <DropdownMenuItem key={action} disabled={!!disabled}>
          {icon && <LeftElement>{icon}</LeftElement>}
          <NavLink to={path}>{action}</NavLink>
          {shortcut && <RightElement>{shortcut}</RightElement>}
        </DropdownMenuItem>
      ))}
    </Fragment>
  )
}

export function ActionsMenu() {
  return (
    <Dropdown triggerButton={hamburger}>
      <Fragment>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <RenderActions actions={menuActions.pages} />
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
            <RenderActions actions={menuActions.profile} />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Session</DropdownMenuLabel>
        <RenderActions actions={menuActions.auth} />
      </Fragment>
    </Dropdown>
  )
}
