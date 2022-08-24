import clsx from "clsx"
import { LabelChip } from "@ui/LabelChip"
import { useLabels } from "@hooks"
import { Dots } from "@ui/Dots"

type LabelsListProps = {
  selected: string[]
  className?: string
}

export default function LabelsList({ selected, className }: LabelsListProps) {
  const labelsQuery = useLabels()

  if (labelsQuery.isLoading) {
    return <Dots />
  }

  if (labelsQuery.isError) {
    console.warn("LabelsList could not obtain labels from useLabels query.")

    return null
  }

  const labels = labelsQuery.data.filter(
    (label) => selected.includes(label.name) || selected.includes(label.id)
  )

  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {labels.map((label) => {
        return (
          <li key={label.id}>
            <LabelChip name={label.name} />
          </li>
        )
      })}
    </ul>
  )
}
