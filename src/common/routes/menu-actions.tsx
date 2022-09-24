import { GoPencil, GoPerson, GoSignOut, GoUnfold } from "react-icons/go"
import { MdOutlineEditNotifications } from "react-icons/md"

import { MenuAction } from "./types"

const menuActions: Record<string, MenuAction[]> = {
  auth: [
    {
      action: "Signout",
      path: "/signout",
      icon: <GoSignOut />
    }
  ],
  pages: [
    {
      action: "See All Issues",
      icon: <GoUnfold />,
      path: "/"
    },
    {
      action: "Create New Issue",
      icon: <GoPencil />,
      path: "issues/create"
    }
  ],
  profile: [
    {
      action: "Notifications",
      path: "/me/notifications",
      icon: <MdOutlineEditNotifications />
    },
    {
      action: "Preferences",
      path: "/me/preferences",
      icon: <GoPerson />
    }
  ]
}

export { menuActions }
