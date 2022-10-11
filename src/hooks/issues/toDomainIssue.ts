export const toDomainIssue = ({ labels, ...rest }: IssueDto): Issue => ({
  labelIDs: labels,
  ...rest
})
