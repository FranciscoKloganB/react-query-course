import { useCallback } from "react"
import { AuthService } from "@auth"
import { useAuthContext } from "./useAuthContext"

export function useClient() {
  const { token } = useAuthContext()

  return useCallback(
    (endpoint: string, config: Record<string, unknown>) =>
      AuthService.client(endpoint, { ...config, token }),
    [token]
  )
}
