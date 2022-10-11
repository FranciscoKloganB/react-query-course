export const toDtoIssue = ({ labelIDs, ...rest }: Issue): IssueDto => ({
  labels: labelIDs,
  ...rest
})
