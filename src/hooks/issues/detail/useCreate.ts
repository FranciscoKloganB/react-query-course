import { CreateIssueDto } from "@interfaces"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

import { baseClient } from "@clients"
import { QKF } from "@common/query-key.factory"

import { toDomainIssue } from "../toDomainIssue"
import { setIssue } from "./useGet"

function useCreate() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation(
    (newIssue: CreateIssueDto) =>
      baseClient<IssueDto>("/api/issues", { data: newIssue }),
    {
      onSuccess: (dto) => {
        queryClient.invalidateQueries(QKF.issues, { exact: true })
        setIssue(queryClient, toDomainIssue(dto))
        navigate(`/issues/${dto.number}`)
      }
    }
  )
}

export { useCreate as useCreateIssueDetail }
