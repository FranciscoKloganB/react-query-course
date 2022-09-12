import { GoHome, GoPencil, GoUnfold, GoSignOut, GoPerson } from "react-icons/go"
import { MdOutlineEditNotifications } from "react-icons/md"
import { MenuActions } from "./types"

const pages: MenuActions = [
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

const auth: MenuActions = [
  {
    name: "Signout",
    path: "/signout",
    icon: <GoSignOut />
  }
]

const profile: MenuActions = [
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

const actionableRoutes = {
  auth,
  pages,
  profile
}
export { actionableRoutes }
