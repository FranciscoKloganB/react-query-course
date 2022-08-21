import { useLabels } from "@hooks"
import LabelsList from "./LabelsList"

export default function LabelsPanel() {
  const labelsQuery = useLabels()

  return (
    <LabelsList
      className="mt-2 justify-center gap-x-2 gap-y-3 md:justify-start"
      labels={labelsQuery.data ?? []}
    />
  )
}
