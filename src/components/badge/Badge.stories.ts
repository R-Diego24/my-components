import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { state: "default", children: "Default Badge" },
};

export const Primary: Story = {
  args: { state: "primary", children: "Primary Badge" },
};

export const Secondary: Story = {
  args: { state: "secondary", children: "Secondary Badge" },
};

export const Success: Story = {
  args: { state: "success", children: "Success Badge" },
};

export const Warning: Story = {
  args: { state: "warning", children: "Warning Badge" },
};

export const Error: Story = {
  args: { state: "error", children: "Error Badge" },
};