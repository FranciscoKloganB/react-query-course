import { capitalCase } from "change-case"

import { Label } from "@rdx/label"
import { Small, TextArea as StyledTextArea } from "@styled"

import getError from "./helpers/getError"
import { IHookFormElement } from "./interfaces"

interface TextAreaProps extends IHookFormElement {
  label: string
  placeholder: string
  rows?: number
}

export function TextArea({
  errors,
  label,
  name,
  placeholder,
  register,
  rows = 4
}: TextAreaProps) {
  if (!register || typeof register !== "function") {
    return null
  }

  const { error, hasError } = getError(errors, name)

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{capitalCase(label)}</Label>
      <StyledTextArea
        aria-invalid={hasError.toString()}
        id={name}
        placeholder={placeholder}
        rows={rows}
        {...register(name)}
      />
      {hasError && (
        <span role="alert">
          <Small className="text-red-600">{error.message}</Small>
        </span>
      )}
    </div>
  )
}
