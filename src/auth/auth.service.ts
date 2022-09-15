/** pretend this is firebase, netlify, or auth0's code. */

import type { AuthResponse, Credentials, IRegisterData } from "./types"

const localStorageKey = "__auth_provider_token__"

const defaultAuthState = {
  expiresAt: 0,
  token: "",
  user: {
    name: ""
  }
}

async function getAuth(): Promise<AuthResponse> {
  const restoredAuthResponse = window.localStorage.getItem(localStorageKey)

  const json = restoredAuthResponse
    ? JSON.parse(restoredAuthResponse)
    : defaultAuthState

  return { ...json, expiresAt: +json?.expiresAt }
}

function handleUserResponse(response: AuthResponse) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(response))

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

// Auth provider wouldn't use our baseClient, they'd have their own that's why we're not just re-using it
const authURL = process.env.REACT_APP_AUTH_URL

async function client(endpoint: string, data: Record<string, unknown>) {
  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  }

  return window
    .fetch(`${authURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
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
