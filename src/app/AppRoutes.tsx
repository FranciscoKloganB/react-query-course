import { Routes, Route } from "react-router-dom"
import appRoutes from "@common/routes"

export function AppRoutes() {
  return (
    <Routes>
      {appRoutes.map(({ element, path }, key) => (
        <Route key={key} path={path} element={element} />
      ))}
    </Routes>
  )
}
