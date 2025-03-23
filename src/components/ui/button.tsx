import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors ",
  {
    variants: {
      variant: {
        default: "bg-plutofi text-white hover:bg-primary/90 font-light",
        outline: "border border-plutofi text-plutofi bg-white hover:bg-primary/90 hover:text-white font-light",
        more: "bg-grey-300 rounded-full text-white",
        feedback:"bg-[#F0CAB2] text-[#1A1A1A] mt-4 py-2 px-4 rounded-full hover:bg-plutofi",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-md px-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-11 rounded-md px-12",
        xxl: "h-11 rounded-md px-16",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading && "opacity-70 pointer-events-none" // Style changes while loading
        )}
        ref={ref}
        disabled={isLoading || props.disabled} // Disable button during loading
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader className="h-4 w-4 animate-spin" /> {/* Add Loader Icon */}
            {/* <span>Loading...</span> */}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

const Loader = ({ className }: { className?: string }) => (
  <svg
    className={cn("animate-spin", className)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

export { Button, buttonVariants };
