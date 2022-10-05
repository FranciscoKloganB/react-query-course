import LabelChipButtons from "@components/LabelChipButtons"

export function IssueEditLabels() {
  return <LabelChipButtons activeButtons={[]} toggle={(v) => console.log(v)} />
}
