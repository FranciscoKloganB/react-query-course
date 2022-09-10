import {
  TooltipRoot,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
  TooltipContentContainer
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
          <div className="max-w-fit">{children}</div>
        </TooltipTrigger>
        <TooltipContent sideOffset={4}>
          <TooltipArrow />
          <TooltipContentContainer>{message}</TooltipContentContainer>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}
