import {
  TooltipArrow,
  TooltipContent,
  TooltipContentContainer,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger
} from "@rdx/tooltip"

type TooltipProps = {
  children: React.ReactNode
  message: React.ReactNode
}

export function Tooltip({ children, message }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <div className="max-w-fit md:mx-0">{children}</div>
        </TooltipTrigger>
        <TooltipContent sideOffset={4}>
          <TooltipArrow />
          <TooltipContentContainer>{message}</TooltipContentContainer>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}
