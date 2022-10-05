import clsx from "clsx"

import { useLabels } from "@hooks"
import { Chip } from "@styled"

type LabelChipProps = {
  name: string
  active?: boolean
  onClick?: (s: string) => void
}

export function LabelChip({ active, name, onClick }: LabelChipProps) {
  const labelsQuery = useLabels()

  if (labelsQuery.isSuccess) {
    const label = labelsQuery.data.find((label) => label.name === name)

    if (!label) {
      console.warn(
        "LabelChip could not find label using name='${name}' in the labels obtained from useLabels. Are you sure the provided name filter exists?"
      )

      return null
    }

    const isNotInteractive = !onClick
    const props = {
      $as: isNotInteractive ? "span" : "button",
      $color: label.color,
      className: clsx(
        "hover:border-yellow-600 hover:brightness-125",
        !!active && "border-yellow-600 brightness-200"
      ),
      onClick
    }

    return <Chip {...props}>{label.name}</Chip>
  }

  return null
}
