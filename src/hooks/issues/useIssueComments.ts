import { baseClient } from "@clients"
import { useQuery } from "@tanstack/react-query"

export function useIssueComments(number: string) {
  const keys = ["issues", "number", number, "comments"]

  return useQuery(keys, ({ signal }) =>
    baseClient<UserComment[]>(`/api/issues/${number}/comments`, { signal })
  )
}
