import { useContext } from "react"
import { BreadcrumbsContext } from "@context"

export function useCrumbs() {
  const context = useContext(BreadcrumbsContext)
  if (context === undefined) {
    throw new Error(`useCrumbs must be used within a BreadcrumbsProvider`)
  }
  return context
}
