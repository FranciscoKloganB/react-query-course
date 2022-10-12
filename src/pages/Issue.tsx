import { IssueDetails } from "@components/IssueDetails"
import { IssueEdit } from "@components/IssueEdit"
import { BaseLayout } from "@layouts"
import { Subtitle, Title } from "@styled"

export default function Issue() {
  return (
    <BaseLayout
      aside={
        <>
          <Subtitle>Edit issue panel</Subtitle>
          <IssueEdit />
        </>
      }
      content={
        <>
          <Title>Issue detail</Title>
          <IssueDetails />
        </>
      }
    />
  )
}
