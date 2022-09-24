import { CreateIssueDto } from "@interfaces"
import { CreateIssueSchema } from "@schemas/CreateIssueSchema"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"
import { setIssue } from "@hooks"
import { Spinner } from "@ui"
import { Form, Input, TextArea } from "@ui/forms"

import { toDomainIssue } from "../hooks/issues/toDomainIssue"

const defaultValues = {
  title: "",
  comment: undefined
}

export function IssueCreate() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const issueMutation = useMutation(
    (newIssue: CreateIssueDto) =>
      baseClient<IssueDto>("/api/issues", { data: newIssue }),
    {
      onSuccess: (dto) => {
        queryClient.invalidateQueries(QKF.issues, { exact: true })
        setIssue(queryClient, toDomainIssue(dto))
        navigate(`/issues/${dto.number}`)
      }
    }
  )

  function onSubmit(data: CreateIssueDto) {
    console.log("About to mutate with:", data)
    issueMutation.mutate({ ...data })
  }

  return (
    <Form
      config={{ ...defaultValues }}
      disable={issueMutation.isLoading}
      onSubmitCallback={onSubmit}
      schema={CreateIssueSchema}
      submitButtonContent={
        issueMutation.isLoading ? <Spinner /> : "Submit new issue"
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
