import { baseClient } from "@clients"
import { useQuery } from "@tanstack/react-query"

export function useIssueComments(number: string) {
  const keys = ["issues", "number", number, "comments"]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<UserComment[]> {
    const [, , number] = queryKey

    return baseClient(`/api/issues/${number}/comments`)
  }

  return useQuery(keys, fetcher)
}
