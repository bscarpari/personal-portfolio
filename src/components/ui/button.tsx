import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "src/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase transition-width duration-300",
  {
    variants: {
      variant: {
        gradient: "bg-gradient text-primary-foreground opacity-90 hover:opacity-80 hover:width-[w-full]",
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:width-[w-full]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:width-[w-full]",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:width-[w-full]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:width-[w-full]",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:width-[w-full]",
        link: "text-primary underline-offset-4 hover:underline hover:width-[w-full]",
      },
      size: {
        default: "h-10 px-4 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-10 rounded-md sm:px-12 px-4 py-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
