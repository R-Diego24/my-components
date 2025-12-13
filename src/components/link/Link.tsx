import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Icon from "../icon/Icon";

const linkVariants = cva(
    "inline-flex items-center gap-2 font-medium transition-colors focus:outline-none focus:underline",
    {
        variants: {
            variant: {
                default: "text-blue-600 hover:text-blue-800 hover:underline",
                muted: "text-slate-500 hover:text-slate-700 hover:underline",
                nav: "text-slate-700 hover:text-slate-900",
                underline: "text-blue-600 underline hover:text-blue-800",
            },
            size: {
                sm: "text-sm",
                md: "text-base",
                lg: "text-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

export interface LinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
    leftIcon?: IconDefinition;
    rightIcon?: IconDefinition;
    external?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, variant, size, leftIcon, rightIcon, external, children, ...props }, ref) => {
        const externalProps = external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {};

        return (
            <a
                ref={ref}
                className={cn(linkVariants({ variant, size }), className)}
                {...externalProps}
                {...props}
            >
                {leftIcon && <Icon icon={leftIcon} className="shrink-0" />}
                {children}
                {rightIcon && <Icon icon={rightIcon} className="shrink-0" />}
            </a>
        );
    }
);

Link.displayName = "Link";

export { linkVariants };
