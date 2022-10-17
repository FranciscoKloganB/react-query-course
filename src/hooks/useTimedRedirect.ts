import { useCallback, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { seconds } from "@helpers"

type TimedRedirectProps = {
  after?: number
  replace?: boolean
  to?: string
}

export function useTimedRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  const originalPathRef = useRef(location.pathname)
  const redirecting = useRef(false)

  const timedRedirect = useCallback(
    ({ to = "/", after = 10, replace = true }: TimedRedirectProps = {}) => {
      if (!redirecting.current) {
        redirecting.current = true
        setTimeout(() => {
          if (location.pathname === originalPathRef.current) {
            navigate(to, { replace })
          }

          redirecting.current = false
        }, seconds(after))
      }
    },
    []
  )

  return timedRedirect
}
