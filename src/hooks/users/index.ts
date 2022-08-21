import { useQuery } from "react-query"

export function useUser(userId: string) {
  const keys = ["users", userId]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<User> {
    const [, userId] = queryKey

    return fetch(`api/users/${userId}`).then((res) => res.json())
  }

  return useQuery(keys, fetcher)
}
