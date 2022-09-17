import { createContext, useCallback, useMemo } from "react"

import { useState } from "react"

import type { BreadcrumbsRoute } from "use-react-router-breadcrumbs"

type BreadcrumbsContextState = {
  crumbs: BreadcrumbsRoute<string>[]
  hasCrumbs: boolean
  setCrumbs: (newCrumbs: BreadcrumbsRoute<string>[]) => void
  getRoutesToCrumb: (active: string) => BreadcrumbsRoute<string>[]
}

const defaultCtx = {
  crumbs: [],
  hasCrumbs: false,
  setCrumbs: () => null,
  getRoutesToCrumb: () => []
}

const BreadcrumbsContext = createContext<BreadcrumbsContextState>(defaultCtx)
BreadcrumbsContext.displayName = "BreadcrumbsContext"

function getWithAncestors(
  path: string,
  crumbs: BreadcrumbsRoute<string>[]
): BreadcrumbsRoute<string>[] {
  const visitedNodes: BreadcrumbsRoute<string>[] = []

  crumbs.every((routeObject) => {
    visitedNodes.push(routeObject)

    if (routeObject.path === path) {
      return false
    }
  })

  return visitedNodes
}

function BreadcrumbsProvider({ children }: { children: React.ReactNode }) {
  const [crumbs, setCrumbs] = useState<BreadcrumbsRoute<string>[]>([])

  const getRoutesToCrumb = useCallback(
    (path: string) => getWithAncestors(path, [...crumbs]),
    []
  )

  const value = useMemo(
    () => ({
      hasCrumbs: !!crumbs.length,
      crumbs,
      setCrumbs,
      getRoutesToCrumb
    }),
    [crumbs, setCrumbs]
  )

  return (
    <BreadcrumbsContext.Provider value={value}>
      {children}
    </BreadcrumbsContext.Provider>
  )
}

export { BreadcrumbsContext, BreadcrumbsProvider }
