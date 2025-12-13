import type { Meta, StoryObj } from "@storybook/react-vite";
import { faArrowRight, faExternalLink, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
    title: "UI/Link",
    component: Link,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "muted", "nav", "underline"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        external: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        href: "#",
        children: "Default Link",
    },
};

export const Muted: Story = {
    args: {
        href: "#",
        variant: "muted",
        children: "Muted Link",
    },
};

export const Nav: Story = {
    args: {
        href: "#",
        variant: "nav",
        children: "Navigation Link",
    },
};

export const Underline: Story = {
    args: {
        href: "#",
        variant: "underline",
        children: "Underlined Link",
    },
};

export const WithLeftIcon: Story = {
    args: {
        href: "#",
        leftIcon: faHome,
        children: "Home",
    },
};

export const WithRightIcon: Story = {
    args: {
        href: "#",
        rightIcon: faArrowRight,
        children: "Next Page",
    },
};

export const WithBothIcons: Story = {
    args: {
        href: "mailto:contact@example.com",
        leftIcon: faEnvelope,
        rightIcon: faArrowRight,
        children: "Contact Us",
    },
};

export const ExternalLink: Story = {
    args: {
        href: "https://google.com",
        external: true,
        rightIcon: faExternalLink,
        children: "Visit Google",
    },
};

export const Small: Story = {
    args: {
        href: "#",
        size: "sm",
        children: "Small Link",
    },
};

export const Large: Story = {
    args: {
        href: "#",
        size: "lg",
        children: "Large Link",
    },
};
