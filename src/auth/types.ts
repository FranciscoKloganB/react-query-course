type Credentials = {
  username: string
  password: string
}

type AuthResponse = {
  expiresAt: number
  token: string
  user: AuthUser
}

type AuthUser = {
  name: string
}

interface IRegisterData {
  email: string
  credentials: Credentials
}

export type { AuthResponse, AuthUser, Credentials, IRegisterData }
