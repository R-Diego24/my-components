import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all rounded-xl focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#4ADE80] text-slate-900 shadow-md " +
          "hover:bg-[#5FF08D] active:bg-[#3CCF6E] " +
          "hover:-translate-y-[1px] active:translate-y-0 " +
          "hover:shadow-[0_0_15px_rgba(74,222,128,0.45)] " +
          "focus:ring-2 focus:ring-emerald-500",

        secondary:
          "border border-[#38BDF8] text-[#38BDF8] shadow-none " +
          "hover:bg-[#38BDF8]/10 hover:-translate-y-[1px] active:translate-y-0 " +
          "hover:shadow-[0_0_15px_rgba(56,189,248,0.45)] " +
          "focus:ring-2 focus:ring-[#38BDF8]",

        outline:
          "border border-slate-200 text-slate-700 bg-transparent " +
          "hover:bg-slate-100 active:bg-slate-200 " +
          "hover:-translate-y-[1px] active:translate-y-0 " +
          "hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] " +
          "focus:ring-2 focus:ring-slate-300",

        ghost:
          "bg-transparent text-slate-700 shadow-none " +
          "hover:bg-slate-100 active:bg-slate-200 " +
          "hover:-translate-y-[1px] active:translate-y-0 " +
          "hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] " +
          "focus:ring-2 focus:ring-slate-300",
      },

      size: {
        sm: "text-sm px-4 py-2",
        md: "text-base px-6 py-3",
        lg: "text-lg px-7 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
