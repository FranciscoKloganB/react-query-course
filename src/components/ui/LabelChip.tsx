import { useLabels } from "@hooks"
import { Chip } from "@styled"
import clsx from "clsx"

export function LabelChip({
  name,
  className,
  toggle
}: {
  name: string
  className?: string
  toggle?: (s: string) => void
}) {
  const labels = useLabels()

  if (labels.isLoading) {
    return null
  }

  if (labels.isError) {
    return <Chip $color="default">{name}</Chip>
  }

  const label: Label = labels.data.find((queryLabel) => queryLabel.name === name) ?? {
    color: "default",
    id: name,
    name: name
  }

  const onClick = toggle ?? (() => ({}))
  const isNotInteractive = !toggle
  const props = {
    $color: label.color,
    className: clsx(className, isNotInteractive && "pointer-events-none"),
    onClick: onClick,
    tabIndex: isNotInteractive ? -1 : undefined
  }

  return <Chip {...props}>{label.name}</Chip>
}
