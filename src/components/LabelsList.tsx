import clsx from "clsx"

import { LabelChip } from "@components/LabelChip"
import { useLabels } from "@hooks"

type LabelsListProps = {
  selected: string[]
  className?: string
}

export default function LabelsList({ selected, className }: LabelsListProps) {
  const labelsQuery = useLabels()

  if (labelsQuery.isError) {
    console.error("LabelsList could not obtain labels from useLabels query.")

    return null
  }

  const labels = labelsQuery.data?.filter(
    (label) => selected.includes(label.name) || selected.includes(label.id)
  )

  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {labels?.map((label) => {
        return (
          <li key={label.id}>
            <LabelChip name={label.name} />
          </li>
        )
      })}
    </ul>
  )
}
