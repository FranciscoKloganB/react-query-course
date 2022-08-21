import { useQuery } from "react-query"

export function useIssues() {
  const keys = ["issues"]

  function fetcher(): Promise<Issue[]> {
    return fetch("api/issues").then((res) => res.json())
  }

  return useQuery(keys, fetcher)
}
