import type { Meta, StoryObj } from "@storybook/react-vite";
import { faUser, faHeart, faRocket, faSpinner, faStar, faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
    title: "UI/Icon",
    component: Icon,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["xs", "sm", "lg", "1x", "2x", "3x", "4x", "5x"],
        },
        rotation: {
            control: { type: "select" },
            options: [undefined, 90, 180, 270],
        },
        flip: {
            control: { type: "select" },
            options: [undefined, "horizontal", "vertical", "both"],
        },
        spin: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        icon: faUser,
        size: "2x",
    },
};

export const Heart: Story = {
    args: {
        icon: faHeart,
        size: "2x",
        className: "text-red-500",
    },
};

export const Rocket: Story = {
    args: {
        icon: faRocket,
        size: "3x",
        className: "text-blue-500",
    },
};

export const Spinning: Story = {
    args: {
        icon: faSpinner,
        size: "2x",
        spin: true,
    },
};

export const RotatedStar: Story = {
    args: {
        icon: faStar,
        size: "2x",
        rotation: 90,
        className: "text-yellow-500",
    },
};

export const FlippedCheck: Story = {
    args: {
        icon: faCheck,
        size: "2x",
        flip: "horizontal",
        className: "text-green-500",
    },
};

export const WithAriaLabel: Story = {
    args: {
        icon: faCog,
        size: "2x",
        ariaLabel: "Settings",
    },
};

export const CSSFallback: Story = {
    args: {
        name: "user",
        prefix: "fas",
        size: "2x",
    },
};