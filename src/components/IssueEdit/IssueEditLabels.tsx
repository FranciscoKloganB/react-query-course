import LabelChipButtons from "@components/LabelChipButtons"

type IssueEditLabelsProps = {
  activeIds: Array<Label["id"]>
  working: boolean
  onLabelClick: (value: Label["id"] | Label["name"]) => void
}

export function IssueEditLabels({
  activeIds,
  working,
  onLabelClick
}: IssueEditLabelsProps) {
  return (
    <LabelChipButtons
      activeButtons={activeIds}
      working={working}
      toggle={onLabelClick}
    />
  )
}
