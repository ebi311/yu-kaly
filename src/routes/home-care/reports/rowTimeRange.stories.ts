import type { Meta, StoryObj } from '@storybook/svelte';

import RowTimeRange from './rowTimeRange.svelte';

const meta = {
  title: 'reports/RowTimeRange',
  component: RowTimeRange,
  tags: ['autodocs'],
  argTypes: {
    start: { control: 'date' },
    end: { control: 'date' }
  }
} satisfies Meta<RowTimeRange>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    start: new Date('2024-01-01T00:00:00.000Z'),
    end: new Date('2024-01-01T01:00:00.000Z')
  }
};
