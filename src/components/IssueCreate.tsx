import joi from "joi"

import { Form, Input, TextArea } from "@ui/forms"

const defaultValues = {
  title: "",
  comment: undefined
}

const testSchema = joi.object({
  title: joi.string().required().min(1).max(72),
  comment: joi.string().optional().min(0).max(512)
})

export function IssueCreate() {
  function onSubmit(data: unknown) {
    console.log("Submitting data...", data)
  }

  return (
    <Form
      config={{ ...defaultValues }}
      onSubmitCallback={onSubmit}
      schema={testSchema}
      submitButtonContent="Submit new issue"
    >
      <Input name="title" label="Title" placeholder="As a user I want..." />
      <TextArea
        name="comment"
        label="Comment"
        placeholder={"Some technical details that might help us include..."}
      />
    </Form>
  )
}
