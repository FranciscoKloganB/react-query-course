import { useQuery } from "react-query"

export function useUser(userId: string) {
  const keys = ["users", userId]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<User> {
    const [, userId] = queryKey

    if (userId) {
      return fetch(`api/users/${userId}`).then((res) => res.json())
    }

    throw new Error("Can not fetch user with ID null")
  }

  if (userId) {
    return useQuery(keys, fetcher)
  }
}
