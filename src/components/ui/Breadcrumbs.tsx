import { NavLink } from "react-router-dom"
import { TbArrowWaveRightDown } from "react-icons/tb"
import useBreadcrumbs from "use-react-router-breadcrumbs"
import { useBreadcrumbRoutesContext } from "@/src/hooks"

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
      <ol role="list" className="flex items-center space-x-4">
        {crumbs.map(({ breadcrumb, match }, index) => (
          <li key={match.pathname}>
            <div className="flex items-center space-x-4">
              {index > 0 && (
                <TbArrowWaveRightDown className="text-yellow-400" />
              )}
              {index === lastElement ? (
                <span className="border-b-2 border-b-yellow-400 text-sm text-slate-300">
                  {breadcrumb}
                </span>
              ) : (
                <NavLink
                  to={match.pathname}
                  className="ml-4 text-sm font-medium text-slate-300 hover:text-yellow-400"
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
