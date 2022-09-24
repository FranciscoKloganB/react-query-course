import { AuthenticatedApp } from "@app/AuthenticatedApp"
import { UnauthenticatedApp } from "@app/UnauthenticatedApp"
import { useAuthContext } from "@hooks"
import { ActionsMenu } from "@nav"
import { Heading } from "@styled"
import { Breadcrumbs } from "@ui"

function App() {
  const { isAuthenticated } = useAuthContext()

  return (
    <div className="max-w-screen min-h-screen bg-slate-900">
      <div className="flex justify-end p-4 md:justify-between">
        <div className="hidden justify-start md:inline-block">
          <Breadcrumbs />
        </div>
        <div>
          <ActionsMenu />
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 lg:pt-6 xl:px-14 2xl:px-16">
        <Heading className="mb-2 lg:mb-6">Issue Tracker</Heading>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </div>
  )
}

export default App
