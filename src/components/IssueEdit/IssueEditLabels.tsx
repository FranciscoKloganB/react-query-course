import LabelChipButtons from "@components/LabelChipButtons"

type IssueEditLabelsProps = {
  activeIds: Array<Label["id"]>
  onLabelClick: (value: Label["id"] | Label["name"]) => void
}

export function IssueEditLabels({
  activeIds,
  onLabelClick
}: IssueEditLabelsProps) {
  return <LabelChipButtons activeButtons={activeIds} toggle={onLabelClick} />
}
