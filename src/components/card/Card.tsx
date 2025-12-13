import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const cardVariants = cva(
    "rounded-2xl p-6 transition-all duration-300",
    {
        variants: {
            variant: {
                default:
                    "bg-white border border-slate-200 " +
                    "hover:border-slate-300 hover:shadow-lg",
                neon:
                    "bg-slate-900 border border-slate-700 " +
                    "hover:border-[#4ADE80] hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]",
                neonBlue:
                    "bg-slate-900 border border-slate-700 " +
                    "hover:border-[#38BDF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]",
                neonPurple:
                    "bg-slate-900 border border-slate-700 " +
                    "hover:border-[#A78BFA] hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]",
                ghost:
                    "bg-transparent border border-slate-200 " +
                    "hover:bg-slate-50 hover:border-slate-300",
            },
            padding: {
                none: "p-0",
                sm: "p-4",
                md: "p-6",
                lg: "p-8",
            },
        },
        defaultVariants: {
            variant: "default",
            padding: "md",
        },
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardVariants> {
    href?: string;
    external?: boolean;
}

export const Card = React.forwardRef<HTMLElement, CardProps>(
    ({ className, variant, padding, href, external, children, ...props }, ref) => {
        const classes = cn(
            cardVariants({ variant, padding }),
            href && "cursor-pointer",
            className
        );

        if (href) {
            const externalProps = external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};

            return (
                <a
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    href={href}
                    className={cn(classes, "block no-underline")}
                    {...externalProps}
                    {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                >
                    {children}
                </a>
            );
        }

        return (
            <div
                ref={ref as React.Ref<HTMLDivElement>}
                className={classes}
                {...(props as React.HTMLAttributes<HTMLDivElement>)}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export { cardVariants };
