import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const textVariants = cva(
  "font-sans text-slate-900",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "md",
      weight: "normal",
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, weight, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(textVariants({ size, weight }), className)}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";