import React, { useEffect } from "react"

/**
 * Scrolls the page to the provided coordinates whenever a re-render occurs.
 * A list of dependencies can be provided to control when the scrolling effect
 * should happen.
 *
 * By default it scrolls the view to the top and leftmost part of the page.
 *
 * Example usage:
 * ```javascript
 *
  const location = useLocation()

  useScroll({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  }, [location.key])

  return <Outlet />
  ```
 */
export function useScroll(
  scrollOptions: ScrollToOptions | undefined,
  deps?: React.DependencyList
) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, ...scrollOptions })
  }, deps)
}
