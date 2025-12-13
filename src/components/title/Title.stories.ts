import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "UI/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle"],
    },
    headingLevel: {
      control: { type: "select" },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: { variant: "h1", children: "Heading Level 1" },
};

export const H2: Story = {
  args: { variant: "h2", children: "Heading Level 2" },
};

export const H3: Story = {
  args: { variant: "h3", children: "Heading Level 3" },
};

export const H4: Story = {
  args: { variant: "h4", children: "Heading Level 4" },
};

export const H5: Story = {
  args: { variant: "h5", children: "Heading Level 5" },
};

export const H6: Story = {
  args: { variant: "h6", children: "Heading Level 6" },
};

export const Subtitle: Story = {
  args: { variant: "subtitle", children: "This is a subtitle" },
};

export const CustomHeadingLevel: Story = {
  args: { headingLevel: 3, children: "This is a custom H3 heading" },
};