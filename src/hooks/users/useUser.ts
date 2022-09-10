import { baseClient } from "@clients"
import { useQuery } from "@tanstack/react-query"
import { minutes } from "@helpers"
import { QKF } from "@/src/common/query-key.factory"

export function useUser(userId: string) {
  return useQuery(
    QKF.userDetails(userId),
    ({ signal }) => {
      if (userId) {
        return baseClient<User>(`/api/users/${userId}`, { signal })
      }

      throw new Error("Can not fetch user with ID null")
    },
    { staleTime: minutes(5) }
  )
}
