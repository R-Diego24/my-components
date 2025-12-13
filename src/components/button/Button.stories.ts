import type { Meta, StoryObj } from "@storybook/react-vite";
import { faRocket, faArrowRight, faSave, faCheck, faDownload } from "@fortawesome/free-solid-svg-icons";
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
  args: { variant: "primary", size: "md", children: "Primary Button" },
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

export const WithLeftIcon: Story = {
  args: { leftIcon: faRocket, children: "Launch" },
};

export const WithRightIcon: Story = {
  args: { rightIcon: faArrowRight, children: "Next" },
};

export const WithBothIcons: Story = {
  args: { leftIcon: faSave, rightIcon: faCheck, children: "Save" },
};

export const DownloadButton: Story = {
  args: { variant: "secondary", leftIcon: faDownload, children: "Download" },
};
