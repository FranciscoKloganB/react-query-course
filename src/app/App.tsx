import { AuthenticatedApp } from "@app/AuthenticatedApp"
import { UnauthenticatedApp } from "@app/UnauthenticatedApp"
import { Heading } from "@styled"

const useAuth = () => {
  const user = "john doe"
  const isAuthenticated = !!user
  return {
    user,
    isAuthenticated,
    logout: () => true
  }
}

function App() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="max-w-screen min-h-screen border-t-8 border-yellow-400 bg-slate-900">
      <div className="container mx-auto px-4 py-3 lg:pt-6 xl:px-14 2xl:px-16">
        <Heading className="mb-2 lg:mb-6">Issue Tracker</Heading>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </div>
  )
}

export default App
