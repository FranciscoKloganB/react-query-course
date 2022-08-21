import { useQuery } from "react-query"

export function useLabels() {
  const keys = ["labels"]

  function fetcher(): Promise<Label[]> {
    return fetch("api/labels").then((res) => res.json())
  }

  return useQuery(keys, fetcher)
}
