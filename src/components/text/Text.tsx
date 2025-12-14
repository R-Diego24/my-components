import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const textVariants = cva(
  "font-sans",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      textColor: {
        default: "text-slate-900",
        muted: "text-slate-500",
        primary: "text-primary",
        secondary: "text-secondary",
        success: "text-green-600",
        warning: "text-yellow-600",
        error: "text-red-600",
        white: "text-white",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      size: "md",
      weight: "normal",
      textColor: "default",
      align: "left",
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "label";
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, textColor, align, as: Tag = "p", ...props }, ref) => {
    return React.createElement(Tag, {
      ref,
      className: cn(textVariants({ size, weight, textColor, align }), className),
      ...props,
    });
  }
);

Text.displayName = "Text";

export { textVariants };