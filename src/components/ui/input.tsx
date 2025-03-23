import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  error?: boolean;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // "flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus-visible:ring-ring focus:ring-1 focus:ring-gray-500 focus-visible:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "font-normal rounded flex h-10 w-full border bg-white px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:ring-0 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-gray-400",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
