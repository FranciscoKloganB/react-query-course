import clsx from "clsx"
import { LabelChip } from "@ui/LabelChip"

type LabelsListProps = {
  labels: string[] | Label[]
  className?: string
}
export default function LabelsList({ labels, className }: LabelsListProps) {
  return (
    <ul className={clsx("flex flex-wrap", className)}>
      {labels.map((label) => {
        const name = typeof label === "string" ? label : label.name

        return <LabelChip key={name} labelName={name} />
      })}
    </ul>
  )
}
