import { useState } from "react"
import { useUpdateEffect } from "usehooks-ts"

import LabelChipButtons from "@components/LabelChipButtons"

type IssueEditLabelsProps = {
  initiallyActiveIds: Array<Label["id"]>
  working: boolean
  onLabelClick: (value: Array<Label["id"]>) => void
}

export function IssueEditLabels({
  initiallyActiveIds,
  working,
  onLabelClick
}: IssueEditLabelsProps) {
  const [labels, setLabels] = useState(initiallyActiveIds)

  useUpdateEffect(() => {
    onLabelClick(labels)
  }, [labels])

  function handleLabelChange(id: string) {
    setLabels((currentLabels) =>
      currentLabels.includes(id)
        ? currentLabels.filter((labelId) => labelId !== id)
        : currentLabels.concat(id)
    )
  }

  return (
    <LabelChipButtons
      activeButtons={labels}
      selector="id"
      working={working}
      toggle={handleLabelChange}
    />
  )
}
