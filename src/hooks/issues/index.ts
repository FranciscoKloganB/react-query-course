import { useQuery } from "react-query"

export function useIssues() {
  const keys = ["issues"]
  const fetcher = ({ queryKey }: { queryKey: typeof keys }) => {
    const [issues] = queryKey

    return fetch(`api/${issues}`).then((res) => res.json())
  }

  return useQuery(keys, fetcher)
}
