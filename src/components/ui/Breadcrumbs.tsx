import { useBreadcrumbRoutesContext } from "@/src/hooks"
import { BiChevronRight } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import useBreadcrumbs from "use-react-router-breadcrumbs"

export function Breadcrumbs() {
  const routesCtx = useBreadcrumbRoutesContext()
  const crumbs = useBreadcrumbs(routesCtx.objects)

  const lastElement = crumbs.length - 1

  // Hide breadcrumbs when we do not have a route or when are at a "root" route
  if (crumbs.length < 2) {
    return null
  }

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center md:space-x-3">
        {crumbs.map(({ breadcrumb, match }, index) => (
          <li key={match.pathname}>
            <div className="flex items-center md:space-x-3">
              {index > 0 && (
                <BiChevronRight className="h-5 w-5 text-yellow-400" />
              )}
              {index === lastElement ? (
                <span className="border-b-2 border-b-yellow-400 text-sm text-slate-300">
                  {breadcrumb}
                </span>
              ) : (
                <NavLink
                  to={match.pathname}
                  className="ml-4 text-sm font-medium text-slate-500 hover:text-yellow-400"
                >
                  {breadcrumb}
                </NavLink>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
