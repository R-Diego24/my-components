import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const imgVariants = cva(
    "max-w-full",
    {
        variants: {
            rounded: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                "2xl": "rounded-2xl",
                full: "rounded-full",
            },
            objectFit: {
                contain: "object-contain",
                cover: "object-cover",
                fill: "object-fill",
                none: "object-none",
                scaleDown: "object-scale-down",
            },
            aspectRatio: {
                auto: "aspect-auto",
                square: "aspect-square",
                video: "aspect-video",
                portrait: "aspect-[3/4]",
                wide: "aspect-[21/9]",
            },
            size: {
                auto: "",
                sm: "w-24 h-24",
                md: "w-32 h-32",
                lg: "w-48 h-48",
                xl: "w-64 h-64",
                full: "w-full h-auto",
            },
            shadow: {
                none: "shadow-none",
                sm: "shadow-sm",
                md: "shadow-md",
                lg: "shadow-lg",
                xl: "shadow-xl",
            },
        },
        defaultVariants: {
            rounded: "none",
            objectFit: "cover",
            aspectRatio: "auto",
            size: "auto",
            shadow: "none",
        },
    }
);

export interface ImgProps
    extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "size">,
    VariantProps<typeof imgVariants> {
    alt: string;
    decorative?: boolean;
    fallbackSrc?: string;
}

export const Img = React.forwardRef<HTMLImageElement, ImgProps>(
    ({ 
        className, 
        rounded, 
        objectFit, 
        aspectRatio, 
        size,
        shadow,
        alt,
        decorative = false,
        fallbackSrc,
        loading = "lazy",
        onError,
        ...props 
    }, ref) => {
        const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            if (fallbackSrc) {
                e.currentTarget.src = fallbackSrc;
            }
            onError?.(e);
        };

        return (
            <img
                ref={ref}
                className={cn(imgVariants({ rounded, objectFit, aspectRatio, size, shadow }), className)}
                alt={decorative ? "" : alt}
                role={decorative ? "presentation" : undefined}
                aria-hidden={decorative ? true : undefined}
                loading={loading}
                onError={handleError}
                {...props}
            />
        );
    }
);

Img.displayName = "Img";

export { imgVariants };
