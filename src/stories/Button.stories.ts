import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from './Button';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    label: { control: 'file' },
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'date' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};