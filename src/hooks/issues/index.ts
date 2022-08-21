import { useQuery } from "react-query"

export function useIssues() {
  const keys = ["issues"]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<Issue[]> {
    const [issues] = queryKey

    return fetch(`api/${issues}`).then((res) => res.json())
  }

  return useQuery(keys, fetcher)
}
