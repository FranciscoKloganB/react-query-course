import { useQuery } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { minutes } from "@helpers"

function fetchUser(id: string, signal?: AbortSignal) {
  return baseClient<User>(`/api/users/${id}`, { signal })
}

function useUser(userId: string) {
  return useQuery(
    QKF.userDetails(userId),
    ({ signal }) => {
      if (userId) {
        return fetchUser(userId, signal)
      }

      throw new Error("Can not fetch user with ID null")
    },
    { staleTime: minutes(5) }
  )
}

export { fetchUser, useUser }
