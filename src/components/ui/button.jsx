import * as React from "react"
import { cn } from "/src/lib/lumi.ts" // ⬅️ FIXED: relative import

const Button = React.forwardRef(
  (
    { className, variant = "default", size = "default", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "default",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "bg-destructive text-white hover:bg-destructive/90":
              variant === "destructive",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground":
              variant === "outline",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-9 px-3 rounded-md": size === "sm",
            "h-11 px-8 rounded-md": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
