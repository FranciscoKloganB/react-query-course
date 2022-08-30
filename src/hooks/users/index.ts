import { baseClient } from "@clients"
import { useQuery } from "@tanstack/react-query"
import { minutes } from "@helpers"

export function useUser(userId: string) {
  const keys = ["users", userId]

  function fetcher({ queryKey }: { queryKey: typeof keys }): Promise<User> {
    const [, userId] = queryKey

    if (userId) {
      return baseClient(`/api/users/${userId}`)
    }

    throw new Error("Can not fetch user with ID null")
  }

  return useQuery(keys, fetcher, { staleTime: minutes(5) })
}
