/* eslint-disable @typescript-eslint/no-explicit-any */
import { DevTool } from "@hookform/devtools"
import { joiResolver } from "@hookform/resolvers/joi"
import Joi from "joi"
import React from "react"
import { useForm } from "react-hook-form"

import { Button } from "@styled"

import createElement from "./helpers/createElement"

type FormProps = {
  children: React.ReactNode
  onSubmitCallback: (data: any) => void
  schema: Joi.Schema<any>
  submitButtonContent: React.ReactNode
  config?: Record<string, any>
  disable?: boolean
}

export function Form({
  children,
  onSubmitCallback,
  schema,
  submitButtonContent,
  config = {},
  disable = false
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

  const isSubmissionDisabbled = disable || !methods.formState.isValid

  return (
    <>
      <form
        className="mt-4 space-y-3"
        onSubmit={(e) => methods.handleSubmit(onSubmit)(e)}
      >
        {React.Children.map(children, (child) => createElement(child, methods))}
        <div className="flex space-x-4 justify-end pt-3">
          <Button
            $variant={isSubmissionDisabbled ? "disabled" : "confirm"}
            disabled={isSubmissionDisabbled}
          >
            {submitButtonContent}
          </Button>
        </div>
      </form>
      <DevTool control={methods.control} />
    </>
  )
}
