import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["solid", "outline"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "warning", "error"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// Solid variants
export const Default: Story = {
  args: { state: "default", children: "Default" },
};

export const Primary: Story = {
  args: { state: "primary", children: "Primary" },
};

export const Secondary: Story = {
  args: { state: "secondary", children: "Secondary" },
};

export const Success: Story = {
  args: { state: "success", children: "Success" },
};

export const Warning: Story = {
  args: { state: "warning", children: "Warning" },
};

export const Error: Story = {
  args: { state: "error", children: "Error" },
};

// Outline variants
export const OutlineDefault: Story = {
  args: { variant: "outline", state: "default", children: "Default" },
};

export const OutlinePrimary: Story = {
  args: { variant: "outline", state: "primary", children: "Primary" },
};

export const OutlineSecondary: Story = {
  args: { variant: "outline", state: "secondary", children: "Secondary" },
};

export const OutlineSuccess: Story = {
  args: { variant: "outline", state: "success", children: "Success" },
};

export const OutlineWarning: Story = {
  args: { variant: "outline", state: "warning", children: "Warning" },
};

export const OutlineError: Story = {
  args: { variant: "outline", state: "error", children: "Error" },
};

// Size variants
export const SmallBadge: Story = {
  args: { size: "sm", state: "primary", children: "Small" },
};

export const MediumBadge: Story = {
  args: { size: "md", state: "primary", children: "Medium" },
};

export const LargeBadge: Story = {
  args: { size: "lg", state: "primary", children: "Large" },
};