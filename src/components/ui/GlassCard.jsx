import * as React from "react"
import { cn } from "/src/lib/lumi.ts";

const GlassCard = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base glassmorphism styles
          "glass rounded-lg shadow-glass transition-all duration-300 hover:shadow-glow-primary backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/10",
          {
            "p-6": variant === "default",
            "p-12 border-2 border-primary/20": variant === "hero",
            "p-8 hover:scale-[1.02] cursor-pointer": variant === "section",
          },
          className
        )}
        {...props}
      />
    )
  }
)

GlassCard.displayName = "GlassCard"

export { GlassCard }
