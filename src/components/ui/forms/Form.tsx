/* eslint-disable @typescript-eslint/no-explicit-any */
import { DevTool } from "@hookform/devtools"
import { joiResolver } from "@hookform/resolvers/joi"
import Joi from "joi"
import React, { Fragment } from "react"
import { useForm } from "react-hook-form"

import { Button } from "@styled"

import createElement from "./helpers/createElement"

type FormProps = {
  children: React.ReactNode
  onSubmitCallback: (data: any) => void
  schema: Joi.Schema<any>
  submitButtonContent: React.ReactNode
  config?: Record<string, any>
}

export function Form({
  children,
  onSubmitCallback,
  schema,
  submitButtonContent,
  config = {}
}: FormProps) {
  const methods = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),
    reValidateMode: "onChange",
    ...config
  })

  function onSubmit(data: any) {
    onSubmitCallback(data)
  }

  methods.formState.errors
  const hasErrors = !methods.formState.isValid

  return (
    <Fragment>
      <form
        className="mt-4 space-y-3"
        onSubmit={(e) => methods.handleSubmit(onSubmit)(e)}
      >
        {React.Children.map(children, (child) => createElement(child, methods))}
        <div className="flex justify-end pt-3">
          <Button $variant="primary" disabled={hasErrors}>
            {submitButtonContent}
          </Button>
        </div>
      </form>
      <DevTool control={methods.control} />
    </Fragment>
  )
}
