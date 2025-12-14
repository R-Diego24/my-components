import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const gridWrapperVariants = cva(
    "grid w-full",
    {
        variants: {
            cols: {
                1: "grid-cols-1",
                2: "grid-cols-2",
                3: "grid-cols-3",
                4: "grid-cols-4",
                5: "grid-cols-5",
                6: "grid-cols-6",
                7: "grid-cols-7",
                8: "grid-cols-8",
                9: "grid-cols-9",
                10: "grid-cols-10",
                11: "grid-cols-11",
                12: "grid-cols-12",
            },
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
            cols: 12,
            gap: "md",
            rowGap: "md",
        },
    }
);

export interface GridWrapperProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridWrapperVariants> {}

export const GridWrapper = React.forwardRef<HTMLDivElement, GridWrapperProps>(
    ({ className, cols, gap, rowGap, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(gridWrapperVariants({ cols, gap, rowGap }), className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GridWrapper.displayName = "GridWrapper";

export { gridWrapperVariants };
