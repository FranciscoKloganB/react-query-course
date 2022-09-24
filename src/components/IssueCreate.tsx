import { CreateIssueSchema } from "@schemas/CreateIssueSchema"

import { Form, Input, TextArea } from "@ui/forms"

const defaultValues = {
  title: "",
  comment: undefined
}

export function IssueCreate() {
  function onSubmit(data: unknown) {
    console.log("Submitting data...", data)
  }

  return (
    <Form
      config={{ ...defaultValues }}
      onSubmitCallback={onSubmit}
      schema={CreateIssueSchema}
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
