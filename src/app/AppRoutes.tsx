import { Routes, Route } from "react-router-dom"
import routes from "@common/routes"

export function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ component, name, path }) => (
        <Route key={name} path={path} element={component()} />
      ))}
    </Routes>
  )
}
