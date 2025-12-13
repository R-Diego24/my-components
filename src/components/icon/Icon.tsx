import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type IconSize =
    | "xs"
    | "sm"
    | "lg"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
    icon?: IconDefinition;
    name?: string;
    prefix?: string;
    size?: IconSize;
    spin?: boolean;
    pulse?: boolean;
    rotation?: 90 | 180 | 270;
    flip?: "horizontal" | "vertical" | "both";
    className?: string;
    ariaLabel?: string;
}

const Icon: React.FC<IconProps> = ({
    icon,
    name,
    prefix = "fas",
    size,
    spin = false,
    rotation,
    flip,
    className = "",
    ariaLabel,
    ...rest
}) => {
    if (icon) {
        return (
            <FontAwesomeIcon
                icon={icon}
                size={size as any}
                spin={spin}
                rotation={rotation}
                flip={flip as any}
                className={className}
                aria-label={ariaLabel}
                {...(rest as any)}
            />
        );
    }

    if (!name) {
        return null;
    }

    const classes = [
        prefix,
        `fa-${name}`,
        size && `fa-${size}`,
        spin && "fa-spin",
        rotation === 90 && "fa-rotate-90",
        rotation === 180 && "fa-rotate-180",
        rotation === 270 && "fa-rotate-270",
        flip === "horizontal" && "fa-flip-horizontal",
        flip === "vertical" && "fa-flip-vertical",
        flip === "both" && "fa-flip-both",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <i className={classes} aria-label={ariaLabel} role={ariaLabel ? "img" : undefined} {...rest} />
    );
};

export default Icon;