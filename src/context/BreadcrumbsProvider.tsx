import React, { createContext, useCallback } from "react"

import { useState } from "react"
import type { BreadcrumbData } from "use-react-router-breadcrumbs"

type BreadcrumbsContextState = {
  crumbs: BreadcrumbData<string>[]
  hasCrumbs: boolean
  setCrumbs: (newCrumbs: BreadcrumbData<string>[]) => void
}

const BreadcrumbsContext = createContext<BreadcrumbsContextState>({
  crumbs: [],
  hasCrumbs: false,
  setCrumbs: () => null
})

BreadcrumbsContext.displayName = "BreadcrumbsContext"

function BreadcrumbsProvider({ children }: { children: React.ReactNode }) {
  const [crumbs, _setCrumbs] = useState<BreadcrumbData<string>[]>([])

  const setCrumbs = useCallback(
    (newCrumbs: BreadcrumbData<string>[]) => _setCrumbs(newCrumbs),
    [_setCrumbs]
  )

  const value = React.useMemo(
    () => ({ crumbs, hasCrumbs: !!crumbs.length, setCrumbs }),
    [crumbs, setCrumbs]
  )

  return (
    <BreadcrumbsContext.Provider value={value}>
      {children}
    </BreadcrumbsContext.Provider>
  )
}

export { BreadcrumbsContext, BreadcrumbsProvider }
