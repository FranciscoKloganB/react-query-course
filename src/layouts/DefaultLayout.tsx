import { useScroll } from "@hooks"
import { Outlet, useLocation } from "react-router-dom"

export function DefaultLayout() {
  const location = useLocation()

  useScroll({ behavior: "smooth" }, [location.key, location.pathname])

  return <Outlet />
}
