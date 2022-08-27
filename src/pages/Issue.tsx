import TwoColumnLayout from "@/layouts/BaseLayout"
import IssueDetails from "@components/IssueDetails"

export default function Issue() {
  return <TwoColumnLayout aside={<></>} section={<IssueDetails />} />
}
