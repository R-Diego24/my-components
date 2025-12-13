import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const gridWrapperVariants = cva(
    "grid w-full grid-cols-12",
    {
        variants: {
            gap: {
                none: "gap-x-0",
                sm: "gap-x-2",
                md: "gap-x-4",
                lg: "gap-x-6",
                xl: "gap-x-8",
            },
            rowGap: {
                none: "gap-y-0",
                sm: "gap-y-2",
                md: "gap-y-4",
                lg: "gap-y-6",
                xl: "gap-y-8",
            },
        },
        defaultVariants: {
            gap: "md",
            rowGap: "md",
        },
    }
);

export interface GridWrapperProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridWrapperVariants> {}

export const GridWrapper = React.forwardRef<HTMLDivElement, GridWrapperProps>(
    ({ className, gap, rowGap, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(gridWrapperVariants({ gap, rowGap }), className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GridWrapper.displayName = "GridWrapper";

export { gridWrapperVariants };
