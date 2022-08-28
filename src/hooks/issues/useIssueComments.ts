import { useQuery } from "react-query"

export function useIssueComments(number: string) {
  const keys = ["issues", "number", number, "comments"]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<UserComment[]> {
    const [, , number] = queryKey

    return fetch(`/api/issues/${number}/comments`)
      .then((res) => res.json())
      .then((data) => data)
  }

  return useQuery(keys, fetcher)
}
