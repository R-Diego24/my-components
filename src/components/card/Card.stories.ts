import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { faArrowRight, faExternalLink, faCode, faRocket, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Card } from "./Card";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import { Button } from "../button/Button";
import { Link } from "../link/Link";

const meta: Meta<typeof Card> = {
    title: "UI/Card",
    component: Card,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "neon", "neonBlue", "neonPurple", "ghost"],
        },
        padding: {
            control: { type: "select" },
            options: ["none", "sm", "md", "lg"],
        },
        external: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: "This is a default card with some content inside.",
    },
};

export const Neon: Story = {
    args: {
        variant: "neon",
        children: "Hover me to see the neon green effect!",
    },
};

export const NeonBlue: Story = {
    args: {
        variant: "neonBlue",
        children: "Hover me to see the neon blue effect!",
    },
};

export const NeonPurple: Story = {
    args: {
        variant: "neonPurple",
        children: "Hover me to see the neon purple effect!",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "This is a ghost card with transparent background.",
    },
};

export const ProjectCardNeon: Story = {
    render: () =>
        React.createElement(Card, { variant: "neon", padding: "lg" }, [
            React.createElement(Title, { key: "title", headingLevel: 3, className: "text-white mb-2" }, "My Portfolio"),
            React.createElement(Text, { key: "text", className: "text-slate-400 mb-4" }, "A modern portfolio built with React, TypeScript and Tailwind CSS. Features smooth animations and a clean design."),
            React.createElement("div", { key: "links", className: "flex gap-3" }, [
                React.createElement(Button, { key: "btn", size: "sm", leftIcon: faArrowRight }, "View Project"),
                React.createElement(Link, { key: "link", href: "https://github.com", external: true, rightIcon: faExternalLink, className: "text-slate-400" }, "GitHub"),
            ]),
        ]),
};

export const ProjectCardBlue: Story = {
    render: () =>
        React.createElement(Card, { variant: "neonBlue", padding: "lg" }, [
            React.createElement(Title, { key: "title", headingLevel: 3, className: "text-white mb-2" }, "Component Library"),
            React.createElement(Text, { key: "text", className: "text-slate-400 mb-4" }, "A reusable UI component library with Storybook documentation. Built for consistency and scalability."),
            React.createElement("div", { key: "links", className: "flex gap-3" }, [
                React.createElement(Button, { key: "btn", variant: "secondary", size: "sm", leftIcon: faCode }, "Explore"),
                React.createElement(Link, { key: "link", href: "#", rightIcon: faExternalLink, className: "text-slate-400" }, "Demo"),
            ]),
        ]),
};

export const ProjectCardPurple: Story = {
    render: () =>
        React.createElement(Card, { variant: "neonPurple", padding: "lg" }, [
            React.createElement(Title, { key: "title", headingLevel: 3, className: "text-white mb-2" }, "Design System"),
            React.createElement(Text, { key: "text", className: "text-slate-400 mb-4" }, "A comprehensive design system with tokens, components, and guidelines for building consistent UIs."),
            React.createElement("div", { key: "links", className: "flex gap-3" }, [
                React.createElement(Button, { key: "btn", size: "sm", leftIcon: faRocket }, "Get Started"),
            ]),
        ]),
};

export const ClickableProjectCard: Story = {
    render: () =>
        React.createElement(Card, { variant: "neon", padding: "lg", href: "#", className: "group" }, [
            React.createElement(Title, { key: "title", headingLevel: 3, className: "text-white mb-2 group-hover:text-[#4ADE80] transition-colors" }, "Clickable Card"),
            React.createElement(Text, { key: "text", className: "text-slate-400 mb-4" }, "This entire card is clickable! Hover to see the neon effect and click to navigate."),
            React.createElement(Text, { key: "cta", size: "sm", className: "text-[#4ADE80]" }, "Click to learn more →"),
        ]),
};

export const SimpleInfoCard: Story = {
    render: () =>
        React.createElement(Card, { variant: "default", padding: "md" }, [
            React.createElement(Title, { key: "title", headingLevel: 4, className: "mb-2" }, "Information"),
            React.createElement(Text, { key: "text", className: "text-slate-600" }, "This is a simple info card using the default variant. Perfect for displaying general content."),
        ]),
};

export const CardWithActions: Story = {
    render: () =>
        React.createElement(Card, { variant: "ghost", padding: "lg" }, [
            React.createElement(Title, { key: "title", headingLevel: 3, className: "mb-1" }, "Contact Us"),
            React.createElement(Title, { key: "subtitle", variant: "subtitle", className: "mb-4" }, "We'd love to hear from you"),
            React.createElement(Text, { key: "text", className: "text-slate-600 mb-4" }, "Have a question or want to work together? Feel free to reach out!"),
            React.createElement("div", { key: "actions", className: "flex gap-3" }, [
                React.createElement(Button, { key: "primary" }, "Send Message"),
                React.createElement(Button, { key: "outline", variant: "outline" }, "Learn More"),
            ]),
        ]),
};

export const SmallPadding: Story = {
    args: {
        padding: "sm",
        children: "Small padding card",
    },
};

export const LargePadding: Story = {
    args: {
        padding: "lg",
        children: "Large padding card",
    },
};

export const NoPadding: Story = {
    args: {
        padding: "none",
        children: "No padding card - useful for images",
    },
};
