import { QKF } from "@/src/common/query-key.factory"
import { baseClient } from "@clients"
import { minutes } from "@helpers"
import { useQuery } from "@tanstack/react-query"
import { labelsArray } from "./placeholderData"

export function useLabels() {
  return useQuery(QKF.labels, ({ signal }) => baseClient<Label[]>("/api/labels", { signal }), {
    staleTime: minutes(15),
    placeholderData: labelsArray
  })
}
