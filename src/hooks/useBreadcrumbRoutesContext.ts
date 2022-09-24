import { useContext } from "react"

import { BreadcrumbRoutesContext } from "@context"

export function useBreadcrumbRoutesContext() {
  const context = useContext(BreadcrumbRoutesContext)
  if (context === undefined) {
    throw new Error(`useCrumbs must be used within a BreadcrumbsProvider`)
  }
  return context
}
