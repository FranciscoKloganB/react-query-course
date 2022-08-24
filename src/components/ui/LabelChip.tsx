import { useLabels } from "@hooks"
import { Chip } from "@styled"

export function LabelChip({
  name,
  className,
  onClick
}: {
  name: string
  className?: string
  onClick?: (s: string) => void
}) {
  const labels = useLabels()

  if (labels.isLoading || labels.isError) {
    return null
  }

  const label = labels.data.find((queryLabel) => queryLabel.name === name)

  if (!label) {
    console.warn(`
      LabelChip could not find label using name='${name}' in the labels obtained from useLabels.
      Are you sure the provided name filter exists?'
    `)

    return null
  }

  const isNotInteractive = !onClick
  const props = {
    $as: isNotInteractive ? "span" : "button",
    $color: label.color,
    className: className,
    onClick
  }

  return <Chip {...props}>{label.name}</Chip>
}
