import clsx from "clsx"
import { LabelChip } from "@ui/LabelChip"
import { useLabels } from "@hooks"
import { Dots } from "@ui/Dots"

type LabelsListProps = {
  selected: string[]
  className?: string
}

export default function LabelsList({ selected, className }: LabelsListProps) {
  const labels = useLabels()

  if (labels.isLoading) {
    return <Dots />
  }

  const selectedLabels = labels.data?.filter((label) => selected.includes(label.name)) ?? []

  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {selectedLabels.map((label) => {
        return (
          <li key={label.id}>
            <LabelChip name={label.name} />
          </li>
        )
      })}
    </ul>
  )
}
