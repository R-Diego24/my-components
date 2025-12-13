import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badgeVariants = cva(
    "inline-flex items-center rounded-md px-2 py-1 text-sm font-medium",
    {
        variants: {
            state: {
                default: "bg-slate-100 text-slate-800",
                primary: "bg-blue-500 text-white",
                secondary: "bg-gray-500 text-white",
                success: "bg-green-500 text-white",
                warning: "bg-yellow-500 text-white",
                error: "bg-red-500 text-white",
            },
        },
        defaultVariants: {
            state: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, state, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(badgeVariants({ state }), className)}
                {...props}
            />
        );
    }
);

Badge.displayName = "Badge";