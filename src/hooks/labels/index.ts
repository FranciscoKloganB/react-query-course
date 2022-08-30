import { baseClient } from "@clients"
import { minutes } from "@helpers"
import { useQuery } from "@tanstack/react-query"

export function useLabels() {
  const keys = ["labels"]

  function fetcher(): Promise<Label[]> {
    return baseClient("api/labels")
  }

  return useQuery(keys, fetcher, { staleTime: minutes(15) })
}
