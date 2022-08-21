import { useQuery } from "react-query"

export function useUser(userId: string) {
  const keys = ["users", userId]

  const fetcher = ({ queryKey }: { queryKey: typeof keys }) => {
    const [users, userId] = queryKey

    return fetch(`api/${users}/${userId}`).then((res) => res.json())
  }

  return useQuery(keys, fetcher)
}
