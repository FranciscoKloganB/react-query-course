import { capitalCase } from "change-case"

import { Label } from "@rdx/label"
import { Small, Input as StyledInput } from "@styled"

import getError from "./helpers/getError"
import { IHookFormElement } from "./interfaces"

interface InputProps extends IHookFormElement {
  label: string
  placeholder: string
}

export function Input({
  errors,
  label,
  name,
  placeholder,
  register
}: InputProps) {
  if (!register || typeof register !== "function") {
    return null
  }

  const { error, hasError } = getError(errors, name)

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{capitalCase(label)}</Label>
      <StyledInput
        aria-invalid={hasError.toString()}
        id={name}
        placeholder={placeholder}
        type="text"
        {...register(name)}
      />
      {hasError && (
        <span role="alert" className="mt-1">
          <Small className="text-red-600">{error.message}</Small>
        </span>
      )}
    </div>
  )
}
