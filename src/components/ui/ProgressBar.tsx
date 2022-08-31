import { useIsFetching } from "@tanstack/react-query"
import clsx from "clsx"

export function ProgressBar() {
  const fetchingCount = useIsFetching()

  return (
    <div
      className={clsx(
        "sticky top-0 z-50 border-t-8 border-yellow-400",
        fetchingCount > 0 && "animate-pulse"
      )}
    />
  )
}
