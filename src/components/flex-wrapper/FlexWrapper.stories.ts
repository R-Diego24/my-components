import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { faArrowRight, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FlexWrapper } from "./FlexWrapper";
import { Card } from "../card/Card";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

const meta: Meta<typeof FlexWrapper> = {
    title: "Layout/FlexWrapper",
    component: FlexWrapper,
    tags: ["autodocs"],
    argTypes: {
        direction: {
            control: { type: "select" },
            options: ["row", "col", "rowReverse", "colReverse"],
        },
        justify: {
            control: { type: "select" },
            options: ["start", "end", "center", "between", "around", "evenly"],
        },
        align: {
            control: { type: "select" },
            options: ["start", "end", "center", "baseline", "stretch"],
        },
        wrap: {
            control: { type: "select" },
            options: ["noWrap", "wrap", "wrapReverse"],
        },
        gap: {
            control: { type: "select" },
            options: ["none", "xs", "sm", "md", "lg", "xl"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof FlexWrapper>;

export const Default: Story = {
    render: () =>
        React.createElement(FlexWrapper, { gap: "md" }, [
            React.createElement("div", { key: "1", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 1"),
            React.createElement("div", { key: "2", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 2"),
            React.createElement("div", { key: "3", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 3"),
        ]),
};

export const Column: Story = {
    render: () =>
        React.createElement(FlexWrapper, { direction: "col", gap: "md" }, [
            React.createElement("div", { key: "1", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 1"),
            React.createElement("div", { key: "2", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 2"),
            React.createElement("div", { key: "3", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 3"),
        ]),
};

export const JustifyBetween: Story = {
    render: () =>
        React.createElement(FlexWrapper, { justify: "between", className: "w-full" }, [
            React.createElement("div", { key: "1", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Left"),
            React.createElement("div", { key: "2", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Right"),
        ]),
};

export const JustifyCenter: Story = {
    render: () =>
        React.createElement(FlexWrapper, { justify: "center", className: "w-full" }, [
            React.createElement("div", { key: "1", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Centered"),
        ]),
};

export const AlignCenter: Story = {
    render: () =>
        React.createElement(FlexWrapper, { align: "center", gap: "md", className: "h-24 bg-slate-50 rounded-lg p-4" }, [
            React.createElement("div", { key: "1", className: "bg-slate-200 rounded px-4 py-2 h-8" }, "Short"),
            React.createElement("div", { key: "2", className: "bg-slate-200 rounded px-4 py-2 h-16" }, "Tall"),
            React.createElement("div", { key: "3", className: "bg-slate-200 rounded px-4 py-2 h-10" }, "Medium"),
        ]),
};

export const SpaceEvenly: Story = {
    render: () =>
        React.createElement(FlexWrapper, { justify: "evenly", className: "w-full" }, [
            React.createElement("div", { key: "1", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "1"),
            React.createElement("div", { key: "2", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "2"),
            React.createElement("div", { key: "3", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "3"),
        ]),
};

export const Wrap: Story = {
    render: () =>
        React.createElement(FlexWrapper, { wrap: "wrap", gap: "md", className: "w-64" }, [
            React.createElement("div", { key: "1", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 1"),
            React.createElement("div", { key: "2", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 2"),
            React.createElement("div", { key: "3", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 3"),
            React.createElement("div", { key: "4", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 4"),
            React.createElement("div", { key: "5", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 5"),
        ]),
};

export const LargeGap: Story = {
    render: () =>
        React.createElement(FlexWrapper, { gap: "xl" }, [
            React.createElement("div", { key: "1", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 1"),
            React.createElement("div", { key: "2", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 2"),
            React.createElement("div", { key: "3", className: "bg-slate-100 border border-slate-300 rounded-lg px-4 py-2" }, "Item 3"),
        ]),
};

export const CardContent: Story = {
    render: () =>
        React.createElement(Card, { variant: "neon", padding: "lg" }, 
            React.createElement(FlexWrapper, { direction: "col", gap: "md" }, [
                React.createElement(Title, { key: "title", headingLevel: 3, className: "text-white" }, "Project Title"),
                React.createElement(Text, { key: "text", className: "text-slate-400" }, "A brief description of the project goes here."),
                React.createElement(FlexWrapper, { key: "actions", gap: "sm", align: "center" }, [
                    React.createElement(Button, { key: "btn", size: "sm", rightIcon: faArrowRight }, "View"),
                ]),
            ])
        ),
};

export const CardHeader: Story = {
    render: () =>
        React.createElement(Card, { variant: "default", padding: "md" },
            React.createElement(FlexWrapper, { direction: "col", gap: "lg" }, [
                React.createElement(FlexWrapper, { key: "header", justify: "between", align: "center", className: "w-full" }, [
                    React.createElement(Title, { key: "title", headingLevel: 4 }, "Card Title"),
                    React.createElement(Icon, { key: "icon", icon: faRocket, className: "text-slate-400" }),
                ]),
                React.createElement(Text, { key: "body", className: "text-slate-600" }, "Card body content goes here with some description text."),
                React.createElement(FlexWrapper, { key: "footer", justify: "end", gap: "sm" }, [
                    React.createElement(Button, { key: "cancel", variant: "ghost", size: "sm" }, "Cancel"),
                    React.createElement(Button, { key: "save", size: "sm" }, "Save"),
                ]),
            ])
        ),
};

export const NavBar: Story = {
    render: () =>
        React.createElement(FlexWrapper, { justify: "between", align: "center", className: "w-full bg-slate-900 p-4 rounded-lg" }, [
            React.createElement(Title, { key: "logo", headingLevel: 4, className: "text-white" }, "Logo"),
            React.createElement(FlexWrapper, { key: "nav", gap: "lg" }, [
                React.createElement(Text, { key: "home", className: "text-slate-300 hover:text-white cursor-pointer" }, "Home"),
                React.createElement(Text, { key: "about", className: "text-slate-300 hover:text-white cursor-pointer" }, "About"),
                React.createElement(Text, { key: "contact", className: "text-slate-300 hover:text-white cursor-pointer" }, "Contact"),
            ]),
            React.createElement(Button, { key: "cta", size: "sm" }, "Get Started"),
        ]),
};

export const CenteredContent: Story = {
    render: () =>
        React.createElement(FlexWrapper, { direction: "col", justify: "center", align: "center", gap: "md", className: "h-64 bg-slate-50 rounded-lg" }, [
            React.createElement(Title, { key: "title", headingLevel: 2 }, "Welcome"),
            React.createElement(Text, { key: "text", className: "text-slate-600" }, "Centered content example"),
            React.createElement(Button, { key: "btn" }, "Get Started"),
        ]),
};
