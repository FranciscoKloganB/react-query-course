import { useLabels } from "@hooks"
import LabelsList from "./LabelsList"

export default function LabelsPanel() {
  const labelsQuery = useLabels()

  return <LabelsList className="mt-2 gap-x-2 gap-y-3" labels={labelsQuery.data ?? []} />
}
