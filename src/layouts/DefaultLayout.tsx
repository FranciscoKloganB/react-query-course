import { Outlet, useLocation } from "react-router-dom"

import { useScroll } from "@hooks"

export function DefaultLayout() {
  const location = useLocation()

  useScroll({ behavior: "smooth" }, [location.key, location.pathname])

  return <Outlet />
}
