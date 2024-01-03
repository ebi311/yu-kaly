import type { Meta, StoryObj } from '@storybook/svelte';
import DateDivider from './dateDivider.svelte';

const meta = {
  title: 'reports/DateDivider',
  component: DateDivider,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'date' }
  }
} satisfies Meta<DateDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date()
  }
};
