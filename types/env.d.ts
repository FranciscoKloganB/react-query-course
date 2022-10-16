/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH_URL: string
  readonly VITE_PAGINATION_DEFAULT_PER_PAGE: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
