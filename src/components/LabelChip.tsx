import clsx from "clsx"

import { useLabels } from "@hooks"
import { Chip } from "@styled"

type LabelChipProps = {
  children: string
  active?: boolean
  onClick?: (s: string) => void
}

export function LabelChip({
  active,
  children: child,
  onClick
}: LabelChipProps) {
  const labelsQuery = useLabels()

  if (labelsQuery.isSuccess) {
    const label = labelsQuery.data.find((label) => label.name === child)

    if (!label) {
      console.warn(
        `LabelChip could not find label using name='${child}' in the labels
        obtained from useLabels. Are you sure the provided name filter exists?`
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

    return <Chip {...props}>{child}</Chip>
  }

  return null
}
