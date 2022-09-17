import { useScroll } from "@hooks"
import { Outlet } from "react-router-dom"

export function DefaultLayout() {
  const scrollRef = useScroll({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  })

  return (
    <div ref={scrollRef}>
      <Outlet />
    </div>
  )
}
