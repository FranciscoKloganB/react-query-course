import { useQuery } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"

function fetchUserList(signal?: AbortSignal) {
  return baseClient<User[]>(`/api/users`, { signal })
}

function useUsersList() {
  return useQuery(QKF.users, ({ signal }) => fetchUserList(signal))
}

export { fetchUserList, useUsersList }
