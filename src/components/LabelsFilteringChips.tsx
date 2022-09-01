import clsx from "clsx"
import { LabelChip } from "@components/LabelChip"
import { useLabels } from "@hooks"

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

  if (labels.isError) {
    console.error("LabelsFilteringChips could not obtain labels from useLabels query.")

    return null
  }

  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {labels.data?.map((label) => {
        return (
          <li key={label.id}>
            <LabelChip
              className={clsx(
                selected.includes(label.name) && "border-yellow-600 brightness-200",
                "hover:border-yellow-600 hover:brightness-125"
              )}
              name={label.name}
              onClick={() => toggle(label.name)}
            />
          </li>
        )
      })}
    </ul>
  )
}
