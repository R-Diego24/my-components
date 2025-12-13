import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Section } from "./Section";
import { Title } from "../title/Title";
import { Text } from "../text/Text";

const meta: Meta<typeof Section> = {
    title: "Layout/Section",
    component: Section,
    tags: ["autodocs"],
    argTypes: {
        background: {
            control: { type: "select" },
            options: ["transparent", "white", "light", "dark", "primary", "secondary"],
        },
        maxWidth: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "xl", "2xl", "full"],
        },
        padding: {
            control: { type: "select" },
            options: ["none", "sm", "md", "lg", "xl"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
    args: {
        children: "This is a default section with transparent background.",
    },
};

export const WhiteBackground: Story = {
    args: {
        background: "white",
        children: "Section with white background",
    },
};

export const LightBackground: Story = {
    args: {
        background: "light",
        children: "Section with light slate background",
    },
};

export const DarkBackground: Story = {
    args: {
        background: "dark",
        children: "Section with dark background",
        className: "text-white",
    },
};

export const PrimaryBackground: Story = {
    args: {
        background: "primary",
        children: "Section with primary green background",
    },
};

export const SecondaryBackground: Story = {
    args: {
        background: "secondary",
        children: "Section with secondary blue background",
    },
};

export const SmallMaxWidth: Story = {
    args: {
        background: "light",
        maxWidth: "sm",
        children: "Small max-width section (640px)",
    },
};

export const LargeMaxWidth: Story = {
    args: {
        background: "light",
        maxWidth: "2xl",
        children: "Extra large max-width section (1536px)",
    },
};

export const FullWidth: Story = {
    args: {
        background: "dark",
        maxWidth: "full",
        children: "Full width section",
        className: "text-white",
    },
};

export const LargePadding: Story = {
    args: {
        background: "light",
        padding: "xl",
        children: "Section with extra large padding",
    },
};

export const HeroSection: Story = {
    render: () =>
        React.createElement(Section, { background: "dark", padding: "xl", maxWidth: "lg" }, [
            React.createElement(Title, { key: "title", headingLevel: 1, className: "text-white text-center mb-4" }, "Welcome to My Portfolio"),
            React.createElement(Text, { key: "text", size: "lg", className: "text-slate-400 text-center" }, "I'm a passionate developer building amazing web experiences."),
        ]),
};

export const AboutSection: Story = {
    render: () =>
        React.createElement(Section, { background: "light", padding: "lg", maxWidth: "xl" }, [
            React.createElement(Title, { key: "title", headingLevel: 2, className: "mb-4" }, "About Me"),
            React.createElement(Text, { key: "text", className: "text-slate-600" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
        ]),
};
