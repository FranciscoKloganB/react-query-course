import { Routes, Route } from "react-router-dom"
import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Issues />} />
      <Route path="/issues/create" element={<AddIssue />} />
      <Route path="/issues/:number" element={<Issue />} />
    </Routes>
  )
}
