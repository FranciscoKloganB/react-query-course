import { IssueCreate } from "@components/IssueCreate"
import { BaseLayout } from "@layouts"
import { Title } from "@styled"

export default function AddIssue() {
  return (
    <BaseLayout
      content={
        <>
          <Title>New issue detail</Title>
          <IssueCreate />
        </>
      }
    />
  )
}
