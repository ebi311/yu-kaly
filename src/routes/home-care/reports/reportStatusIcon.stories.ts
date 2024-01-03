import type { Meta, StoryObj } from '@storybook/svelte';
import ReportStatusIcon from './reportStatusIcon.svelte';

const meta = {
  title: 'reports/reportStatusIcon',
  component: ReportStatusIcon,
  tags: ['autodocs']
} satisfies Meta<ReportStatusIcon>;

export default meta;
type Story = StoryObj<ReportStatusIcon>;

export const Done: Story = {
  args: {
    status: 'done'
  }
};

export const Pending: Story = {
  args: {
    status: 'pending'
  }
};
