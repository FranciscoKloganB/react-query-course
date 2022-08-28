export const toDomainIssue = (dto: IssueDto): Issue => ({ labelIDs: dto.labels, ...dto })
