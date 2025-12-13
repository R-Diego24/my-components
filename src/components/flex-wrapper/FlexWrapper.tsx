import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const flexWrapperVariants = cva(
    "flex",
    {
        variants: {
            direction: {
                row: "flex-row",
                col: "flex-col",
                rowReverse: "flex-row-reverse",
                colReverse: "flex-col-reverse",
            },
            justify: {
                start: "justify-start",
                end: "justify-end",
                center: "justify-center",
                between: "justify-between",
                around: "justify-around",
                evenly: "justify-evenly",
            },
            align: {
                start: "items-start",
                end: "items-end",
                center: "items-center",
                baseline: "items-baseline",
                stretch: "items-stretch",
            },
            wrap: {
                noWrap: "flex-nowrap",
                wrap: "flex-wrap",
                wrapReverse: "flex-wrap-reverse",
            },
            gap: {
                none: "gap-0",
                xs: "gap-1",
                sm: "gap-2",
                md: "gap-4",
                lg: "gap-6",
                xl: "gap-8",
            },
        },
        defaultVariants: {
            direction: "row",
            justify: "start",
            align: "stretch",
            wrap: "noWrap",
            gap: "md",
        },
    }
);

export interface FlexWrapperProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexWrapperVariants> {}

export const FlexWrapper = React.forwardRef<HTMLDivElement, FlexWrapperProps>(
    ({ className, direction, justify, align, wrap, gap, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(flexWrapperVariants({ direction, justify, align, wrap, gap }), className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);

FlexWrapper.displayName = "FlexWrapper";

export { flexWrapperVariants };
