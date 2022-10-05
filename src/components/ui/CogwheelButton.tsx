import { GoGear } from "react-icons/go"

import { ButtonIcon } from "@styled"

import { Icon } from "./Icon"

export const CogwheelButton = (
  <ButtonIcon className="ml-4 hover:animate-spin-slow">
    <Icon label="change assignee button">
      <GoGear />
    </Icon>
  </ButtonIcon>
)
