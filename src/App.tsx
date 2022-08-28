import { Route, Routes, useMatch } from "react-router-dom"

import { AppContainer, Heading } from "@components/styled"
import AddIssue from "@pages/AddIssue"
import Issue from "@pages/Issue"
import Issues from "@pages/Issues"
import { Link } from "@rrd/link"

function App() {
  const isRootPath = useMatch({ path: "/", end: true })
  return (
    <AppContainer>
      <Heading className="mb-2 lg:mb-6">Issue Tracker</Heading>
      {!isRootPath ? <Link to="/">See all issues</Link> : null}
      <Routes>
        <Route path="/" element={<Issues />} />
        <Route path="/add" element={<AddIssue />} />
        <Route path="/issue/:number" element={<Issue />} />
      </Routes>
    </AppContainer>
  )
}

export default App
