import get from "lodash.get"
import { FieldError, FieldErrors } from "react-hook-form"

export default function getError(
  errors: FieldErrors | undefined,
  name: string,
  ancestors: string[] = []
): { error: FieldError; hasError: boolean } {
  const error = get(errors ?? {}, ancestors.concat(name))
  const hasError = !!error

  return {
    error,
    hasError
  }
}
