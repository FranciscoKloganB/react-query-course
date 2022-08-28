import TwoColumnLayout from "@/layouts/BaseLayout"
import IssueDetails from "@components/IssueDetails"
import { Button } from "@styled"

export default function Issue() {
  return (
    <TwoColumnLayout
      aside={<></>}
      section={
        <>
          <Button>back to issues</Button>
          <IssueDetails />
        </>
      }
    />
  )
}
