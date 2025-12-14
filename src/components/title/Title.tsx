import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const titleVariants = cva(
    "font-sans text-slate-900",
    {
        variants: {
            variant: {
                h1: "text-4xl font-bold",
                h2: "text-3xl font-bold",
                h3: "text-2xl font-semibold",
                h4: "text-xl font-semibold",
                h5: "text-lg font-medium",
                h6: "text-base font-medium",
                subtitle: "text-lg text-slate-500 font-normal",
            },
        },
        defaultVariants: {
            variant: "h1",
        },
    }
);

type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle";

export interface TitleProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
    ({ headingLevel, variant, className, ...props }, ref) => {
        const resolvedVariant: TitleVariant = variant ?? (headingLevel ? `h${headingLevel}` as TitleVariant : "h1");
        const HeadingTag = (
            headingLevel 
                ? `h${headingLevel}` 
                : resolvedVariant === "subtitle" 
                    ? "p" 
                    : resolvedVariant
        ) as React.ElementType;

        return (
            <HeadingTag
                ref={ref}
                className={cn(titleVariants({ variant: resolvedVariant }), className)}
                {...props}
            />
        );
    }
);

Title.displayName = "Title";

export { titleVariants };