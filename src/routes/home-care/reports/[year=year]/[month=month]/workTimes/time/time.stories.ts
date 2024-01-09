import type { Meta, StoryObj } from '@storybook/svelte';
import WorkTime from './time.svelte';

const meta = {
  title: 'reports/workTimes/time',
  component: WorkTime,
  tags: ['autodocs'],
  args: {
    category: 'physical care',
    time: 90,
  },
} satisfies Meta<WorkTime>;

export default meta;
type Story = StoryObj<WorkTime>;

export const Defaul: Story = {
  args: {
    category: 'physical care',
    time: 90,
  },
};
