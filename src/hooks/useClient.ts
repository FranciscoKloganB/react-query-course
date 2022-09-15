import { useCallback } from "react"
import { AuthService } from "@auth"
import { useAuth } from "./useAuth"

export function useClient() {
  const { token } = useAuth()

  return useCallback(
    (endpoint: string, config: Record<string, unknown>) =>
      AuthService.client(endpoint, { ...config, token }),
    [token]
  )
}
