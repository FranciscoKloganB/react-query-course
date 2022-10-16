import { useCallback } from "react"
import { createSearchParams, useSearchParams } from "react-router-dom"
import type { URLSearchParamsInit } from "react-router-dom"

export function usePaginationParams(initialSearchParams?: URLSearchParamsInit) {
  const [searchParams, setSearchParams] = useSearchParams(initialSearchParams)

  const setPage = useCallback(
    (page: number | string) =>
      setSearchParams((previousSearchParams) =>
        createSearchParams({ ...previousSearchParams, page: page.toString() })
      ),
    []
  )

  const page = +(searchParams.get("page") ?? 1)
  const perPage = +(searchParams.get("perPage") ?? 10)

  return { page, perPage, setPage }
}
