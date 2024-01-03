import type { Meta, StoryObj } from '@storybook/svelte';
import WrokTimes from './workTimes.svelte';

const meta = {
  title: 'reports/workTimes',
  component: WrokTimes,
  tags: ['autodocs']
} satisfies Meta<WrokTimes>;

export default meta;
type Story = StoryObj<WrokTimes>;

export const Default: Story = {
  args: {
    workTimes: {
      'physical care': 90,
      'live care': 60,
      'attend hospital': 30
    }
  }
};
