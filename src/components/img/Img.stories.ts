import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Img } from "./Img";
import { Card } from "../card/Card";
import { FlexWrapper } from "../flex-wrapper/FlexWrapper";
import { Title } from "../title/Title";
import { Text } from "../text/Text";

const meta: Meta<typeof Img> = {
    title: "UI/Img",
    component: Img,
    tags: ["autodocs"],
    argTypes: {
        rounded: {
            control: { type: "select" },
            options: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
        },
        objectFit: {
            control: { type: "select" },
            options: ["contain", "cover", "fill", "none", "scaleDown"],
        },
        aspectRatio: {
            control: { type: "select" },
            options: ["auto", "square", "video", "portrait", "wide"],
        },
        size: {
            control: { type: "select" },
            options: ["auto", "sm", "md", "lg", "xl", "full"],
        },
        shadow: {
            control: { type: "select" },
            options: ["none", "sm", "md", "lg", "xl"],
        },
        decorative: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Img>;

const SAMPLE_IMAGE = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";
const SAMPLE_AVATAR = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400";
const SAMPLE_LANDSCAPE = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200";

export const Default: Story = {
    args: {
        src: SAMPLE_IMAGE,
        alt: "Beautiful mountain landscape",
    },
};

export const Rounded: Story = {
    args: {
        src: SAMPLE_IMAGE,
        alt: "Mountain with rounded corners",
        rounded: "xl",
        size: "lg",
    },
};

export const RoundedFull: Story = {
    args: {
        src: SAMPLE_AVATAR,
        alt: "User avatar",
        rounded: "full",
        size: "md",
        objectFit: "cover",
    },
};

export const SquareAspect: Story = {
    args: {
        src: SAMPLE_IMAGE,
        alt: "Square cropped image",
        aspectRatio: "square",
        size: "lg",
        rounded: "lg",
    },
};

export const VideoAspect: Story = {
    args: {
        src: SAMPLE_LANDSCAPE,
        alt: "Video aspect ratio image",
        aspectRatio: "video",
        size: "full",
        rounded: "lg",
    },
};

export const WithShadow: Story = {
    args: {
        src: SAMPLE_IMAGE,
        alt: "Image with shadow",
        rounded: "xl",
        size: "lg",
        shadow: "xl",
    },
};

export const Decorative: Story = {
    args: {
        src: SAMPLE_IMAGE,
        alt: "",
        decorative: true,
        rounded: "lg",
        size: "md",
    },
};

export const SmallSize: Story = {
    args: {
        src: SAMPLE_AVATAR,
        alt: "Small avatar",
        size: "sm",
        rounded: "full",
    },
};

export const LargeSize: Story = {
    args: {
        src: SAMPLE_IMAGE,
        alt: "Large image",
        size: "xl",
        rounded: "lg",
    },
};

export const FullWidth: Story = {
    args: {
        src: SAMPLE_LANDSCAPE,
        alt: "Full width landscape",
        size: "full",
        rounded: "lg",
        aspectRatio: "video",
    },
};

export const ObjectContain: Story = {
    args: {
        src: SAMPLE_IMAGE,
        alt: "Contained image",
        objectFit: "contain",
        size: "lg",
        className: "bg-slate-100",
    },
};

export const AvatarInCard: Story = {
    render: () =>
        React.createElement(Card, { variant: "default", padding: "md" },
            React.createElement(FlexWrapper, { gap: "md", align: "center" }, [
                React.createElement(Img, { 
                    key: "avatar",
                    src: SAMPLE_AVATAR, 
                    alt: "John Doe", 
                    rounded: "full", 
                    size: "sm" 
                }),
                React.createElement(FlexWrapper, { key: "info", direction: "col", gap: "none" }, [
                    React.createElement(Title, { key: "name", headingLevel: 4 }, "John Doe"),
                    React.createElement(Text, { key: "role", size: "sm", className: "text-slate-500" }, "Software Engineer"),
                ]),
            ])
        ),
};

export const ProjectCardWithImage: Story = {
    render: () =>
        React.createElement(Card, { variant: "neon", padding: "none", className: "overflow-hidden max-w-sm" }, [
            React.createElement(Img, { 
                key: "img",
                src: SAMPLE_LANDSCAPE, 
                alt: "Project preview", 
                size: "full",
                aspectRatio: "video",
            }),
            React.createElement(FlexWrapper, { key: "content", direction: "col", gap: "sm", className: "p-6" }, [
                React.createElement(Title, { key: "title", headingLevel: 3, className: "text-white" }, "My Project"),
                React.createElement(Text, { key: "desc", className: "text-slate-400" }, "A beautiful project with an image header."),
            ]),
        ]),
};

export const ImageGallery: Story = {
    render: () =>
        React.createElement(FlexWrapper, { gap: "md", wrap: "wrap" }, [
            React.createElement(Img, { key: "1", src: SAMPLE_IMAGE, alt: "Gallery 1", size: "md", rounded: "lg" }),
            React.createElement(Img, { key: "2", src: SAMPLE_LANDSCAPE, alt: "Gallery 2", size: "md", rounded: "lg" }),
            React.createElement(Img, { key: "3", src: SAMPLE_AVATAR, alt: "Gallery 3", size: "md", rounded: "lg" }),
        ]),
};
