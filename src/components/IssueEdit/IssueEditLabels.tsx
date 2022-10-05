import LabelChipButtons from "@components/LabelChipButtons"

export function IssueEditLabels() {
  return (
    <LabelChipButtons
      className="mt-2 justify-center gap-x-2 gap-y-3 md:justify-start"
      activeButtons={[]}
      toggle={(v) => console.log(v)}
    />
  )
}
