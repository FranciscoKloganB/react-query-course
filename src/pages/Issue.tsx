import { Fragment } from "react"

import { IssueDetails } from "@components/IssueDetails"
import { IssueEdit } from "@components/IssueEdit"
import { BaseLayout } from "@layouts"
import { Subtitle, Title } from "@styled"

export default function Issue() {
  return (
    <BaseLayout
      aside={
        <Fragment>
          <Subtitle>Edit issue panel</Subtitle>
          <IssueEdit />
        </Fragment>
      }
      content={
        <Fragment>
          <Title>Issue detail</Title>
          <IssueDetails />
        </Fragment>
      }
    />
  )
}
