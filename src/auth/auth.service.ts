/** pretend this is firebase, netlify, or auth0's code. */

import type { AuthResponse, Credentials, IRegisterData } from "./types"

const authURL = import.meta.env.VITE_AUTH_URL
const localStorageKey = "__auth_provider_token__"

const defaultAuthState = {
  expiresAt: 0,
  token: "",
  user: {
    name: ""
  }
}

async function getAuth(): Promise<AuthResponse> {
  // FIXME: Remove these two lines
  const previous = await import("../../mocks/login.json")
  handleUserResponse(previous)

  const restoredAuthResponse = window.localStorage.getItem(localStorageKey)

  const json = restoredAuthResponse
    ? JSON.parse(restoredAuthResponse)
    : defaultAuthState

  return { ...json, expiresAt: +json?.expiresAt }
}

function handleUserResponse(response: AuthResponse) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(response))
  console.log("AuthService persisted mock data to local storage")

  return response
}

function login({ username, password }: Credentials) {
  return client("login", { username, password }).then(handleUserResponse)
}

function register({ email, credentials }: IRegisterData) {
  return client("register", { email, credentials }).then(handleUserResponse)
}

/** Not really async, but a real API would be */
async function logout() {
  window.localStorage.removeItem(localStorageKey)
}

async function client(_endpoint: string, data: Record<string, unknown>) {
  const _config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }

  // FIXME: Replace the lines below with a fetch call
  console.log("AuthService.client: mocking response from login/register")
  const authResponse = await import("../../mocks/login.json")
  console.log("AuthService.client result:", authResponse)

  return {
    ...authResponse,
    expiresAt: +authResponse?.expiresAt
  }
}

const AuthService = {
  client,
  defaultAuthState,
  getAuth,
  login,
  register,
  logout,
  localStorageKey
}

export { AuthService }
