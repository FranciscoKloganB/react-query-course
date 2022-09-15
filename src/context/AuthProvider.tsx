import { AuthService } from "@auth"

import React, { createContext } from "react"

import { FullPageErrorFallback, FullSpinner } from "@ui"
import { useAsync } from "@hooks"

import type { AuthResponse, Credentials, IRegisterData } from "@auth/types"

import { QueryCache } from "@tanstack/react-query"

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error)
  },
  onSuccess: (data) => {
    console.log(data)
  }
})

type AuthContextState = { isAuthenticated: boolean } & AuthResponse

const AuthContext = createContext<AuthContextState>({
  ...AuthService.defaultAuthState,
  isAuthenticated: false
})

AuthContext.displayName = "AuthContext"

function AuthProvider({ children }: { children: React.ReactNode }) {
  const {
    data,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData
  } = useAsync<AuthResponse, unknown>()

  React.useEffect(() => {
    run(AuthService.getAuth())
  }, [run])

  const login = React.useCallback(
    (form: Credentials) =>
      AuthService.login(form).then((user) => setData(user)),
    [setData]
  )

  const register = React.useCallback(
    (form: IRegisterData) =>
      AuthService.register(form).then((user) => setData(user)),
    [setData]
  )
  const logout = React.useCallback(() => {
    AuthService.logout()
    queryCache.clear()
    setData(AuthService.defaultAuthState)
  }, [setData])

  if (isLoading || isIdle) {
    return <FullSpinner />
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />
  }

  const { expiresAt, token, user } = data ?? AuthService.defaultAuthState
  const isAuthenticated = !!user && !!token && expiresAt < Date.now()

  const value = React.useMemo(
    () => ({
      expiresAt,
      isAuthenticated,
      token,
      user,
      login,
      logout,
      register
    }),
    [expiresAt, isAuthenticated, token, user, login, logout, register]
  )

  if (isSuccess) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  }

  throw new Error(`Unhandled status: ${status}`)
}

export { AuthContext, AuthProvider }
