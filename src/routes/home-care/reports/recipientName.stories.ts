import type { Meta, StoryObj } from '@storybook/svelte';
import RecipientName from './recipientName.svelte';

const meta = {
  title: 'reports/Recipient Name',
  component: RecipientName,
  tags: ['autodocs']
} satisfies Meta<RecipientName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'John Doe'
  }
};
