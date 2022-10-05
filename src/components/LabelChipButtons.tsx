import clsx from "clsx"

import { LabelChip } from "@components/LabelChip"
import { useLabels } from "@hooks"

type LabelChipButtonsProps = {
  activeButtons: string[]
  className?: string
  selector?: "id" | "name"
  toggle: (idOrName: string) => void
}

export default function LabelChipButtons({
  activeButtons,
  className,
  selector = "name",
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
        const isActive = activeButtons.includes(label[selector])

        return (
          <li key={label.id}>
            <LabelChip
              aria-role="button"
              aria-pressed={isActive.toString()}
              active={isActive}
              onClick={() => toggle(label[selector])}
            >
              {label.name}
            </LabelChip>
          </li>
        )
      })}
    </ul>
  )
}
