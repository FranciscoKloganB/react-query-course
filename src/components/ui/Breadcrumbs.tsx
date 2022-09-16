import { NavLink } from "react-router-dom"
import { GoHome } from "react-icons/go"

import type { BreadcrumbData } from "use-react-router-breadcrumbs"

export function Breadcrumbs({ crumbs }: { crumbs: BreadcrumbData<string>[] }) {
  if (crumbs.length === 0) {
    return null
  }

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <NavLink to="/" className="text-slate-400 hover:text-yellow-400">
              <GoHome
                className="h-3.5 w-3.5 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </NavLink>
          </div>
        </li>
        {crumbs.map((route) => (
          <li key={route.key}>
            <div className="flex items-center">
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <NavLink
                to={route.location}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {route.breadcrumb}
              </NavLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
