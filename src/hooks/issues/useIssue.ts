import { baseClient } from "@clients"
import { seconds } from "@helpers"
import { useQuery } from "@tanstack/react-query"
import { toDomainIssue } from "./toDomainIssue"

export function useIssue(number: string) {
  const keys = ["issues", "number", number]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<Issue> {
    const [, , number] = queryKey

    return baseClient(`/api/issues/${number}`).then((dto) => toDomainIssue(dto))
  }

  return useQuery(keys, fetcher, { staleTime: seconds(30) })
}
