import { Fragment } from "react"

import { IssueDetails } from "@components/IssueDetails"
import { BaseLayout } from "@layouts"
import { Title } from "@styled"

export default function Issue() {
  return (
    <BaseLayout
      content={
        <Fragment>
          <Title>Issue detail</Title>
          <IssueDetails />
        </Fragment>
      }
    />
  )
}
