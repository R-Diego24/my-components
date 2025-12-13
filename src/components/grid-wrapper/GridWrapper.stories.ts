import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { GridWrapper } from "./GridWrapper";
import { Card } from "../card/Card";
import { Title } from "../title/Title";
import { Text } from "../text/Text";

const meta: Meta<typeof GridWrapper> = {
    title: "Layout/GridWrapper",
    component: GridWrapper,
    tags: ["autodocs"],
    argTypes: {
        gap: {
            control: { type: "select" },
            options: ["none", "sm", "md", "lg", "xl"],
        },
        rowGap: {
            control: { type: "select" },
            options: ["none", "sm", "md", "lg", "xl"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof GridWrapper>;

// Helper to create grid items for demos
const GridItem = ({ span = 1, children }: { span?: number; children: React.ReactNode }) =>
    React.createElement("div", {
        className: `col-span-${span} bg-slate-100 border border-slate-300 rounded-lg p-4 text-center`,
    }, children);

export const Default: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "md", rowGap: "md" }, [
            React.createElement("div", { key: "1", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Col 1-4"),
            React.createElement("div", { key: "2", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Col 5-8"),
            React.createElement("div", { key: "3", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Col 9-12"),
        ]),
};

export const TwoColumns: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "lg", rowGap: "lg" }, [
            React.createElement("div", { key: "1", className: "col-span-6 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Left (6 cols)"),
            React.createElement("div", { key: "2", className: "col-span-6 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Right (6 cols)"),
        ]),
};

export const ThreeColumns: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "md", rowGap: "md" }, [
            React.createElement("div", { key: "1", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "1/3"),
            React.createElement("div", { key: "2", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "2/3"),
            React.createElement("div", { key: "3", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "3/3"),
        ]),
};

export const FourColumns: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "md", rowGap: "md" }, [
            React.createElement("div", { key: "1", className: "col-span-3 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "1/4"),
            React.createElement("div", { key: "2", className: "col-span-3 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "2/4"),
            React.createElement("div", { key: "3", className: "col-span-3 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "3/4"),
            React.createElement("div", { key: "4", className: "col-span-3 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "4/4"),
        ]),
};

export const AsymmetricLayout: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "lg", rowGap: "lg" }, [
            React.createElement("div", { key: "1", className: "col-span-8 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Main Content (8 cols)"),
            React.createElement("div", { key: "2", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Sidebar (4 cols)"),
        ]),
};

export const MixedSpans: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "md", rowGap: "md" }, [
            React.createElement("div", { key: "1", className: "col-span-12 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Full Width (12 cols)"),
            React.createElement("div", { key: "2", className: "col-span-6 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Half (6 cols)"),
            React.createElement("div", { key: "3", className: "col-span-6 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Half (6 cols)"),
            React.createElement("div", { key: "4", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Third"),
            React.createElement("div", { key: "5", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Third"),
            React.createElement("div", { key: "6", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "Third"),
        ]),
};

export const LargeGap: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "xl", rowGap: "xl" }, [
            React.createElement("div", { key: "1", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "XL Gap"),
            React.createElement("div", { key: "2", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "XL Gap"),
            React.createElement("div", { key: "3", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "XL Gap"),
        ]),
};

export const NoGap: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "none", rowGap: "none" }, [
            React.createElement("div", { key: "1", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "No Gap"),
            React.createElement("div", { key: "2", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "No Gap"),
            React.createElement("div", { key: "3", className: "col-span-4 bg-slate-100 border border-slate-300 rounded-lg p-4 text-center" }, "No Gap"),
        ]),
};

export const ProjectsGrid: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "lg", rowGap: "lg" }, [
            React.createElement(Card, { key: "1", variant: "neon", className: "col-span-4" }, [
                React.createElement(Title, { key: "t1", headingLevel: 4, className: "text-white mb-2" }, "Project 1"),
                React.createElement(Text, { key: "p1", className: "text-slate-400" }, "Description of project 1"),
            ]),
            React.createElement(Card, { key: "2", variant: "neonBlue", className: "col-span-4" }, [
                React.createElement(Title, { key: "t2", headingLevel: 4, className: "text-white mb-2" }, "Project 2"),
                React.createElement(Text, { key: "p2", className: "text-slate-400" }, "Description of project 2"),
            ]),
            React.createElement(Card, { key: "3", variant: "neonPurple", className: "col-span-4" }, [
                React.createElement(Title, { key: "t3", headingLevel: 4, className: "text-white mb-2" }, "Project 3"),
                React.createElement(Text, { key: "p3", className: "text-slate-400" }, "Description of project 3"),
            ]),
        ]),
};

export const BlogLayout: Story = {
    render: () =>
        React.createElement(GridWrapper, { gap: "xl", rowGap: "lg" }, [
            React.createElement("article", { key: "main", className: "col-span-8" }, [
                React.createElement(Title, { key: "t", headingLevel: 2, className: "mb-4" }, "Blog Post Title"),
                React.createElement(Text, { key: "p", className: "text-slate-600" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."),
            ]),
            React.createElement("aside", { key: "sidebar", className: "col-span-4" }, [
                React.createElement(Card, { key: "c", variant: "ghost" }, [
                    React.createElement(Title, { key: "st", headingLevel: 4, className: "mb-2" }, "Related Posts"),
                    React.createElement(Text, { key: "sp", size: "sm", className: "text-slate-500" }, "More articles you might like..."),
                ]),
            ]),
        ]),
};
