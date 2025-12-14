import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Icon } from "../icon/Icon";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-xl focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-slate-900 shadow-md " +
          "hover:bg-primary-hover active:bg-primary-active " +
          "hover:-translate-y-[1px] active:translate-y-0 " +
          "hover:shadow-neon-green " +
          "focus:ring-2 focus:ring-emerald-500",

        secondary:
          "border border-secondary text-secondary shadow-none " +
          "hover:bg-secondary-soft hover:-translate-y-[1px] active:translate-y-0 " +
          "hover:shadow-neon-blue " +
          "focus:ring-2 focus:ring-secondary",

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
    VariantProps<typeof buttonVariants> {
    leftIcon?: IconDefinition;
    rightIcon?: IconDefinition;
    loading?: boolean;
    loadingText?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, loading, loadingText, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Icon icon={faSpinner} className="shrink-0 animate-spin" />
            {loadingText ?? children}
          </>
        ) : (
          <>
            {leftIcon && <Icon icon={leftIcon} className="shrink-0" />}
            {children}
            {rightIcon && <Icon icon={rightIcon} className="shrink-0" />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
