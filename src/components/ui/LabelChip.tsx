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

  if (labels.isLoading || labels.isError) {
    return null
  }

  const label = labels.data.find((queryLabel) => queryLabel.name === name)

  if (!label) {
    console.error(`Could not find label with name '${name}. Are you sure it exists?'`)

    return null
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
