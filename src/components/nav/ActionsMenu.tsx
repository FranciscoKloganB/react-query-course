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
import { Link } from "react-router-dom"
import {
  GoHome,
  GoPencil,
  GoSettings,
  GoSignOut,
  GoThreeBars,
  GoUnfold,
  GoPerson
} from "react-icons/go"
import { MdOutlineEditNotifications } from "react-icons/md"
import { BiChevronRight } from "react-icons/bi"

type MenuActions = Array<{
  name: string
  path: string
  disabled?: boolean
  icon?: React.ReactNode
  shortcut?: string
}>

const hamburger = (
  <RoundButton aria-label="Open actions menu">
    <GoThreeBars />
  </RoundButton>
)

const pageRoutes: MenuActions = [
  {
    name: "Home",
    path: "/",
    icon: <GoHome />
  },
  {
    name: "Create New Issue",
    path: "/issues/create",
    icon: <GoPencil />
  },
  {
    name: "See All Issues",
    path: "/",
    icon: <GoUnfold />
  }
]

const authRoutes: MenuActions = [
  {
    name: "Signout",
    path: "/signout",
    icon: <GoSignOut />
  }
]

const userProfileRoutes: MenuActions = [
  {
    name: "Notifications",
    path: "/me/notifications",
    icon: <MdOutlineEditNotifications />
  },
  {
    name: "Preferences",
    path: "/me/preferences",
    icon: <GoPerson />
  }
]

function RenderActions({ actions }: { actions: MenuActions }) {
  return (
    <>
      {actions.map(({ disabled, icon, name, path, shortcut }) => (
        <DropdownMenuItem key={name} disabled={!!disabled}>
          {icon && <LeftElement>{icon}</LeftElement>}
          <Link to={path}>{name}</Link>
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
        <RenderActions actions={pageRoutes} />
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
            <RenderActions actions={userProfileRoutes} />
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Session</DropdownMenuLabel>
        <RenderActions actions={authRoutes} />
      </>
    </Dropdown>
  )
}
