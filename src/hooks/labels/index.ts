import { baseClient } from "@clients"
import { minutes } from "@helpers"
import { useQuery } from "@tanstack/react-query"

export function useLabels() {
  const keys = ["labels"]

  return useQuery(keys, ({ signal }) => baseClient<Label[]>("/api/labels", { signal }), {
    staleTime: minutes(15)
  })
}
