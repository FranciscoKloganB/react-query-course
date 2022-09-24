import type { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

export interface IHookFormElement {
  name: string
  register?: UseFormRegister<FieldValues>
  errors?: FieldErrors
}
