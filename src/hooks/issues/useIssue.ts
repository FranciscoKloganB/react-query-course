import { useQuery } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"

export function useIssue(number: string) {
  const keys = ["issues", "number", number]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<Issue> {
    const [, , number] = queryKey

    return fetch(`/api/issues/${number}`)
      .then((res) => res.json())
      .then((dto) => toDomainIssue(dto))
  }

  return useQuery(keys, fetcher)
}
