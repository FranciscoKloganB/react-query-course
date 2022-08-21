import clsx from "clsx"
import { Chip } from "./styled"

type LabelsListProps = {
  labels: string[] | Label[]
  className?: string
}
export default function LabelsList({ labels, className }: LabelsListProps) {
  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {labels.map((label) => {
        // Ensure UI does not break while we do not configure issues to retrieve actual label
        if (typeof label === "string") {
          return <Chip key={label}>{label}</Chip>
        }

        return (
          <Chip $color={label.color} key={label.id}>
            {label.name}
          </Chip>
        )
      })}
    </ul>
  )
}
