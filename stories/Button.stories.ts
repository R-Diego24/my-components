import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  component: Button,
  args: { children: 'Click me' },
  argTypes: {
    variant: { control: 'radio', options: ['primary','secondary','ghost'] },
  },
};
export default meta;

export const Playground: StoryObj<typeof Button> = {};
export const Disabled: StoryObj<typeof Button> = {
  args: { disabled: true, children: 'Disabled' },
};
