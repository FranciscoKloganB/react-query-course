import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { minutes } from "@helpers"

import { AuthProvider } from "./AuthProvider"
import { BreadcrumbRoutesProvider } from "./BreadcrumbRoutesProvider"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      refetchOnWindowFocus: false,
      staleTime: minutes(1)
    }
  }
})

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BreadcrumbRoutesProvider>{children}</BreadcrumbRoutesProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
