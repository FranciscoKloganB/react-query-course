import { createContext, useMemo } from "react"

import { useState } from "react"

import type { BreadcrumbsRoute } from "use-react-router-breadcrumbs"

type BreadcrumbRoutesContextState = {
  objects: BreadcrumbsRoute<string>[]
  isEmpty: boolean
  setObjects: (routeObjects: BreadcrumbsRoute<string>[]) => void
}

type BreadcrumbsRoutesProviderProps = {
  children: React.ReactNode
}

const initialValue = { objects: [], isEmpty: false, setObjects: () => null }
const BreadcrumbRoutesContext =
  createContext<BreadcrumbRoutesContextState>(initialValue)
BreadcrumbRoutesContext.displayName = "BreadcrumbRoutesContext"

function BreadcrumbRoutesProvider({
  children
}: BreadcrumbsRoutesProviderProps) {
  const [objects, setObjects] = useState<BreadcrumbsRoute<string>[]>([])

  const value = useMemo(
    () => ({
      isEmpty: !!objects.length,
      objects,
      setObjects
    }),
    [objects]
  )

  return (
    <BreadcrumbRoutesContext.Provider value={value}>
      {children}
    </BreadcrumbRoutesContext.Provider>
  )
}

export { BreadcrumbRoutesContext, BreadcrumbRoutesProvider }
