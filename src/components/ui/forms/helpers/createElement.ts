import React from "react"
import type { FunctionComponentElement } from "react"
import type { FieldValues, UseFormReturn } from "react-hook-form"

import type { IHookFormElement } from "../interfaces"

export default function createElement(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  child: any,
  methods: UseFormReturn<FieldValues, unknown>
): FunctionComponentElement<IHookFormElement> & React.ReactNode {
  return child.props.name
    ? React.createElement<IHookFormElement>(child.type, {
        ...{
          ...child.props,
          errors: methods.formState.errors,
          register: methods.register,
          key: child.props.name
        }
      })
    : child
}
