import { Fragment } from "react"

import { IssueCreate } from "@components/IssueCreate"
import { BaseLayout } from "@layouts"
import { Title } from "@styled"

export default function AddIssue() {
  return (
    <BaseLayout
      content={
        <Fragment>
          <Title>New issue detail</Title>
          <IssueCreate />
        </Fragment>
      }
    />
  )
}
