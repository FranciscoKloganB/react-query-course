import { CreateIssueDto } from "@interfaces"
import { CreateIssueSchema } from "@schemas/CreateIssueSchema"

import { useCreateIssueDetail } from "@hooks"
import { Spinner } from "@ui"
import { Form, Input, TextArea } from "@ui/forms"

const defaultValues = {
  title: "",
  comment: ""
}

export function IssueCreate() {
  const creator = useCreateIssueDetail()

  function onSubmit(data: CreateIssueDto) {
    console.log("About to mutate with:", data)
    creator.mutate({ ...data })
  }

  return (
    <Form
      config={{ ...defaultValues }}
      disable={creator.isLoading}
      onSubmitCallback={onSubmit}
      schema={CreateIssueSchema}
      submitButtonContent={
        creator.isLoading ? (
          <div className="inline-flex items-center gap-x-2">
            Creating
            <span>
              <Spinner />
            </span>
          </div>
        ) : (
          "Create"
        )
      }
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
