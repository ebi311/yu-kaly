import type { Meta, StoryObj } from '@storybook/svelte';
import Point from './point.svelte';

const meta = {
  title: 'reports/Point',
  component: Point,
  tags: ['autodocs'],
  argTypes: {
    points: { type: 'number' },
  },
} satisfies Meta<Point>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    points: 1,
  },
};
