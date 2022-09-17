import { NavLink } from "react-router-dom"
import { TbArrowWaveRightDown } from "react-icons/tb"
import type { BreadcrumbData } from "use-react-router-breadcrumbs"

export function Breadcrumbs({ crumbs }: { crumbs: BreadcrumbData<string>[] }) {
  // Hides breadcrumbs on all parent routes
  if (crumbs.length < 2) {
    return null
  }

  const lastElement = crumbs.length - 1

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {crumbs.map((route, index) => (
          <li key={route.match.pathname}>
            <div className="flex items-center space-x-4">
              {index > 0 && (
                <TbArrowWaveRightDown className="text-yellow-400" />
              )}
              {index === lastElement ? (
                <span className="border-b-2 border-b-yellow-400 text-sm text-slate-300">
                  {route.breadcrumb}
                </span>
              ) : (
                <NavLink
                  to={route.match.pathname}
                  className="ml-4 text-sm font-medium text-slate-300 hover:text-yellow-400"
                >
                  {route.breadcrumb}
                </NavLink>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
