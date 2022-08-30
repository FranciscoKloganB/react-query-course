import { baseClient } from "@clients"
import { useQuery } from "@tanstack/react-query"
import { minutes } from "@helpers"

export function useUser(userId: string) {
  const keys = ["users", userId]

  return useQuery(
    keys,
    ({ signal }) => {
      if (userId) {
        return baseClient<User>(`/api/users/${userId}`, { signal })
      }

      throw new Error("Can not fetch user with ID null")
    },
    { staleTime: minutes(5) }
  )
}
