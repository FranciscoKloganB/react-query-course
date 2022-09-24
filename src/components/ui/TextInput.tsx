import { sentenceCase } from "change-case"
import type { UseFormRegisterReturn } from "react-hook-form"

import { Label } from "@rdx/label"
import { Input, InputContainer, Small } from "@styled"

type TextInputProps = {
  elementId: string
  registerProps: UseFormRegisterReturn
  error?: string
  label?: string
  placeholder?: string
  rows?: number
}
export function TextInput({
  elementId,
  error,
  label,
  placeholder,
  registerProps
}: TextInputProps) {
  const example = placeholder ?? `Add ${sentenceCase(elementId).toLowerCase()}`

  return (
    <InputContainer>
      {!!label && <Label htmlFor={elementId}>Title</Label>}
      <Input
        id={elementId}
        type="text"
        placeholder={example}
        {...registerProps}
      />
      {!!error && <Small className="text-red-600">{error}</Small>}
    </InputContainer>
  )
}
