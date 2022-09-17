import React, { useEffect, useRef } from "react"

/**
 * Returns a React `ref` which can be assigned to any dom element.
 *
 * Once assigned the window scrolls with provided behaviour (`props`) to the
 * element owning the `ref` whenever a re-render occurs. A list of dependencies
 * can be provided to control when the scrolling effect should happen.
 *
 * Example usage:
 * ```javascript
 *
  const location = useLocation()
  const scrollRef = useScroll({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  }, [location.key])

  return (
    <div ref={scrollRef}>
      <Outlet />
    </div>
  )
  ```
 */
export function useScrollByRef(
  scrollOptions: ScrollIntoViewOptions,
  deps?: React.DependencyList
) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current && ref.current.scrollIntoView({ ...scrollOptions })
  }, deps)

  return ref
}
