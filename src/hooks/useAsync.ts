/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useCallback, useLayoutEffect, useReducer } from "react"

function useSafeDispatch<D, E>(dispatch: React.Dispatch<any>) {
  const mounted = useRef(false)

  useLayoutEffect(() => {
    mounted.current = true

    return () => {
      mounted.current = false
    }
  }, [])

  return useCallback(
    (s: Partial<AsyncState<D, E>>) => {
      if (mounted.current) {
        return dispatch(s)
      }

      return void 0
    },
    [dispatch]
  )
}

/**
 * Example usage:
 * ```javascript
 *
 * const {data, error, status, run} = useAsync()
 *
 * useEffect(() => {
 *  run(fetchPokemon(pokemonName))
 * }, [pokemonName, run])
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncState<D = any, E = any> = {
  status: "idle" | "pending" | "rejected" | "resolved"
  data: D | null
  error: E | null
}

const defaultInitialState: AsyncState = {
  status: "idle",
  data: null,
  error: null
}

function useAsync<D, E>(initialState: Partial<AsyncState<D, E>> = {}) {
  const initialStateRef = useRef({
    ...defaultInitialState,
    ...initialState
  })

  const [{ status, data, error }, setState] = useReducer(
    (
      currentState: AsyncState<D, E>,
      newState: AsyncState<D & null, E & null>
    ) => ({
      ...currentState,
      ...newState
    }),
    initialStateRef.current
  )

  const safeSetState = useSafeDispatch(setState)

  const setData = useCallback(
    (data: D) => safeSetState({ data, status: "resolved" }),
    [safeSetState]
  )

  const setError = useCallback(
    (error: E) => safeSetState({ error, status: "rejected" }),
    [safeSetState]
  )

  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  )

  const run = useCallback(
    (promise: Promise<D & E>) => {
      if (!promise || !promise.then) {
        throw new Error(
          "The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?"
        )
      }

      safeSetState({ status: "pending" })

      return promise.then(
        (data) => {
          setData(data)
          return data
        },
        (error) => {
          setError(error)
          return Promise.reject(error)
        }
      )
    },
    [safeSetState, setData, setError]
  )

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === "idle",
    isLoading: status === "pending",
    isError: status === "rejected",
    isSuccess: status === "resolved",

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset
  }
}

export { useAsync }
