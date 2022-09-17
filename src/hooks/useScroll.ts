import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"

export function useScroll(props: ScrollIntoViewOptions) {
  const location = useLocation()
  const scrollToTop = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollToTop.current && scrollToTop.current.scrollIntoView({ ...props })
  }, [location.key])

  return scrollToTop
}
