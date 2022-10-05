import clsx from "clsx"

import { LabelChip } from "@components/LabelChip"
import { useLabels } from "@hooks"

type LabelChipButtonsProps = {
  selected: string[]
  toggle: (label: string) => void
  className?: string
}

export default function LabelChipButtons({
  className,
  selected,
  toggle
}: LabelChipButtonsProps) {
  const labels = useLabels()

  if (labels.isError) {
    console.error(
      "LabelsFilteringChips could not obtain labels from useLabels query."
    )

    return null
  }

  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {labels.data?.map((label) => {
        const isActive = selected.includes(label.name)

        return (
          <li key={label.id}>
            <LabelChip
              aria-role="button"
              aria-pressed={isActive.toString()}
              active={isActive}
              name={label.name}
              onClick={() => toggle(label.name)}
            />
          </li>
        )
      })}
    </ul>
  )
}
