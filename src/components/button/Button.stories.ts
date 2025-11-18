import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "secondary", size: "lg", children: "Primary Button" },
};

export const Secondary: Story = {
  args: { variant: "secondary", size: "md", children: "Secondary Button" },
};

export const Outline: Story = {
  args: { variant: "outline", size: "md", children: "Outline Button" },
};

export const Ghost: Story = {
  args: { variant: "ghost", size: "md", children: "Ghost Button" },
};

export const Large: Story = {
  args: { size: "lg", children: "Large Button" },
};

export const Small: Story = {
  args: { size: "sm", children: "Small Button" },
};
