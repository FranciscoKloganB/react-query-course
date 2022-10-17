type UseCursorPointerProps = Partial<{
  working: boolean
  clickable: boolean
  disabled: boolean
}>

export function useCursorPointer({
  clickable,
  disabled,
  working
}: UseCursorPointerProps) {
  const isWorkInProgress = !!working
  const isInteractive = !!clickable
  const isNotInteractive = !isInteractive

  let cursor = "cursor-pointer"
  if (isWorkInProgress) {
    cursor = "cursor-progress"
  } else if (isNotInteractive) {
    cursor = "cursor-auto"
  } else if (disabled || working) {
    cursor = "cursor-not-allowed"
  }

  return {
    clickable,
    cursor,
    isInteractive,
    isNotInteractive,
    isWorkInProgress,
    working
  }
}
