import { sentenceCase } from "change-case"
import type { UseFormRegisterReturn } from "react-hook-form"

import { Label } from "@rdx/label"
import { Small, TextArea } from "@styled"

type FreeTextProps = {
  elementId: string
  registerProps: UseFormRegisterReturn
  error?: string
  label?: string
  placeholder?: string
  rows?: number
}
export function FreeText({
  elementId,
  error,
  label,
  placeholder,
  registerProps,
  rows = 4
}: FreeTextProps) {
  const example = placeholder ?? `Add ${sentenceCase(elementId).toLowerCase()}`

  return (
    <div>
      {!!label && <Label htmlFor={elementId}>{label}</Label>}
      <div className="mt-1">
        <TextArea
          rows={rows}
          id={elementId}
          placeholder={example}
          {...registerProps}
        />
      </div>
      {!!error && <Small className="text-red-600">{error}</Small>}
    </div>
  )
}
