import { useQuery } from "@tanstack/react-query"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { minutes } from "@helpers"

import { labelsArray } from "./placeholderData"

function fetchLabels(signal?: AbortSignal) {
  return baseClient<Label[]>("/api/labels", { signal })
}

function useLabels() {
  return useQuery(QKF.labels, ({ signal }) => fetchLabels(signal), {
    staleTime: minutes(15),
    placeholderData: labelsArray
  })
}

export { fetchLabels, useLabels }
