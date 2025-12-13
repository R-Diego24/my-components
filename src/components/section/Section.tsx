import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const sectionVariants = cva(
    "w-full py-12 px-4",
    {
        variants: {
            background: {
                transparent: "bg-transparent",
                white: "bg-white",
                light: "bg-slate-50",
                dark: "bg-slate-900",
                primary: "bg-[#4ADE80]",
                secondary: "bg-[#38BDF8]",
            },
            maxWidth: {
                sm: "max-w-screen-sm mx-auto",
                md: "max-w-screen-md mx-auto",
                lg: "max-w-screen-lg mx-auto",
                xl: "max-w-screen-xl mx-auto",
                "2xl": "max-w-screen-2xl mx-auto",
                full: "max-w-full",
            },
            padding: {
                none: "py-0",
                sm: "py-6",
                md: "py-12",
                lg: "py-20",
                xl: "py-32",
            },
        },
        defaultVariants: {
            background: "transparent",
            maxWidth: "xl",
            padding: "md",
        },
    }
);

export interface SectionProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, background, maxWidth, padding, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(sectionVariants({ background, maxWidth, padding }), className)}
                {...props}
            >
                {children}
            </section>
        );
    }
);

Section.displayName = "Section";

export { sectionVariants };
