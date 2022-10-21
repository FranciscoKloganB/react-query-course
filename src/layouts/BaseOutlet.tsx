import { Outlet, useLocation } from "react-router-dom"

import { useScroll } from "@hooks"
import { ActionsMenu } from "@nav"
import { Heading } from "@styled"
import { Breadcrumbs } from "@ui"
import { ProgressBar } from "@ui"

export function BaseOutlet() {
  const location = useLocation()

  useScroll({ behavior: "smooth" }, [location.key, location.pathname])

  return (
    <>
      <ProgressBar />
      <div className="max-w-screen min-h-screen bg-slate-900">
        <div className="flex justify-end p-4 md:justify-between">
          <div className="w-full">
            <Breadcrumbs />
          </div>
          <div>
            <ActionsMenu />
          </div>
        </div>
        <div className="container mx-auto px-4 py-3 lg:pt-6 xl:px-14 2xl:px-16">
          <Heading className="mb-2 lg:mb-6">Issue Tracker</Heading>
          <div className="space-y-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
