import joi from "joi"

export const CreateIssueSchema = joi
  .object({
    title: joi.string().required().min(1).max(72),
    comment: joi.string().required().min(12).max(512)
  })
  .meta({ className: "CreateIssueDto" })
