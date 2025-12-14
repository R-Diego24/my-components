import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
    "inline-flex items-center font-medium",
    {
        variants: {
            variant: {
                solid: "",
                outline: "bg-transparent border",
            },
            state: {
                default: "",
                primary: "",
                secondary: "",
                success: "",
                warning: "",
                error: "",
            },
            size: {
                sm: "px-1.5 py-0.5 text-xs rounded",
                md: "px-2 py-1 text-sm rounded-md",
                lg: "px-3 py-1.5 text-base rounded-lg",
            },
        },
        compoundVariants: [
            // Solid variants
            { variant: "solid", state: "default", className: "bg-slate-100 text-slate-800" },
            { variant: "solid", state: "primary", className: "bg-primary text-slate-900" },
            { variant: "solid", state: "secondary", className: "bg-secondary text-white" },
            { variant: "solid", state: "success", className: "bg-green-500 text-white" },
            { variant: "solid", state: "warning", className: "bg-yellow-500 text-white" },
            { variant: "solid", state: "error", className: "bg-red-500 text-white" },
            // Outline variants
            { variant: "outline", state: "default", className: "border-slate-300 text-slate-700" },
            { variant: "outline", state: "primary", className: "border-primary text-primary" },
            { variant: "outline", state: "secondary", className: "border-secondary text-secondary" },
            { variant: "outline", state: "success", className: "border-green-500 text-green-600" },
            { variant: "outline", state: "warning", className: "border-yellow-500 text-yellow-600" },
            { variant: "outline", state: "error", className: "border-red-500 text-red-600" },
        ],
        defaultVariants: {
            variant: "solid",
            state: "default",
            size: "md",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant, state, size, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(badgeVariants({ variant, state, size }), className)}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";

export { badgeVariants };