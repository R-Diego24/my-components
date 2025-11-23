import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "bold"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Small: Story = {
  args: { size: "sm", weight: "normal", children: "Small Text" },
};

export const Medium: Story = {
  args: { size: "md", weight: "medium", children: "Medium Text" },
};

export const Large: Story = {
  args: { size: "lg", weight: "bold", children: "Large Text" },
};

export const ExtraLarge: Story = {
  args: { size: "xl", weight: "bold", children: "Extra Large Text" },
};