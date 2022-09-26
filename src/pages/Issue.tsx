import { Fragment } from "react"

import { IssueDetails } from "@components/IssueDetails"
import { IssueEdit } from "@components/IssueEdit"
import { BaseLayout } from "@layouts"
import { Subtitle, Title } from "@styled"
import { Tooltip } from "@ui"

export default function Issue() {
  return (
    <BaseLayout
      aside={
        <Fragment>
          <Tooltip message="Use this panel to edit the issue details">
            <Subtitle>Edit panel</Subtitle>
          </Tooltip>
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
