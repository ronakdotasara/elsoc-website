import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "font-medium font-display tracking-tight transition-all duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-volt",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-volt text-[#04070f] shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_4px_24px_var(--glow-volt)]",
          "hover:bg-volt-strong hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.6),0_8px_32px_var(--glow-volt)]",
          "active:translate-y-0",
        ],
        secondary: [
          "glass text-fg",
          "hover:bg-surface-strong hover:border-line-strong hover:-translate-y-0.5",
          "active:translate-y-0",
        ],
        outline: [
          "border border-line-strong text-fg bg-transparent",
          "hover:border-volt hover:text-volt",
        ],
        ghost: ["text-fg-muted hover:text-fg hover:bg-surface"],
        danger: [
          "bg-danger/10 border border-danger/40 text-danger",
          "hover:bg-danger/20 hover:border-danger",
        ],
        link: ["text-volt underline-offset-4 hover:underline p-0 h-auto"],
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-10 rounded-lg px-5 text-sm",
        lg: "h-12 rounded-lg px-7 text-base",
        icon: "size-10 rounded-lg",
        "icon-sm": "size-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
