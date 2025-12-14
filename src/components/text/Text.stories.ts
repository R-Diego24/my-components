import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
    },
    textColor: {
      control: { type: "select" },
      options: ["default", "muted", "primary", "secondary", "success", "warning", "error", "white"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "label"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: "Default text with base styling" },
};

export const ExtraSmall: Story = {
  args: { size: "xs", children: "Extra small text" },
};

export const Small: Story = {
  args: { size: "sm", weight: "normal", children: "Small Text" },
};

export const Medium: Story = {
  args: { size: "md", weight: "medium", children: "Medium Text" },
};

export const Large: Story = {
  args: { size: "lg", weight: "semibold", children: "Large Semibold Text" },
};

export const ExtraLarge: Story = {
  args: { size: "xl", weight: "bold", children: "Extra Large Bold Text" },
};

export const Primary: Story = {
  args: { textColor: "primary", children: "Primary colored text" },
};

export const Secondary: Story = {
  args: { textColor: "secondary", children: "Secondary colored text" },
};

export const Muted: Story = {
  args: { textColor: "muted", children: "Muted text for secondary info" },
};

export const Error: Story = {
  args: { textColor: "error", weight: "medium", children: "Error message text" },
};

export const Success: Story = {
  args: { textColor: "success", children: "Success message text" },
};

export const CenteredText: Story = {
  args: { align: "center", children: "This text is centered" },
};

export const RightAligned: Story = {
  args: { align: "right", children: "Right aligned text" },
};

export const AsSpan: Story = {
  args: { as: "span", children: "This renders as a <span>" },
};

export const AsLabel: Story = {
  args: { as: "label", weight: "medium", children: "Form Label" },
};