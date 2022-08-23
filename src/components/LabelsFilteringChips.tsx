import clsx from "clsx"
import { LabelChip } from "@ui/LabelChip"
import { useLabels } from "@hooks"
import { Dots } from "@ui/Dots"

type LabelsFilteringChipsProps = {
  selected: string[]
  toggle: (label: string) => void
  className?: string
}

export default function LabelsFilteringChips({
  selected,
  className,
  toggle
}: LabelsFilteringChipsProps) {
  const labels = useLabels()

  if (labels.isLoading) {
    return <Dots />
  }

  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {labels.data?.map((label) => {
        return (
          <li key={label.id}>
            <LabelChip
              className={clsx(selected.includes(label.name) && "border-yellow-600 brightness-200")}
              name={label.name}
              toggle={() => toggle(label.name)}
            />
          </li>
        )
      })}
    </ul>
  )
}
