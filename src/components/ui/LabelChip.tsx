import { useLabels } from "@hooks"
import { Chip } from "@styled"

export function LabelChip({ labelName }: { labelName: string }) {
  const labels = useLabels()

  if (labels.isLoading) {
    return null
  }

  if (labels.isError) {
    return <Chip $color="default">{labelName}</Chip>
  }

  const label = labels.data.find((queryLabel) => queryLabel.name === labelName) ?? {
    color: "default",
    id: labelName,
    name: labelName
  }

  return <Chip $color={label.color}>{label.name}</Chip>
}
