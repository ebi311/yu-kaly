import type { StoryObj, Meta } from '@storybook/svelte';
import TextBox from './textbox.svelte';

const meta = {
  title: 'components/Textbox',
  component: TextBox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    class: { control: 'text' },
  },
} satisfies Meta<TextBox>;

export default meta;
type Story = StoryObj<TextBox>;

export const Default: Story = {
  args: {
    label: 'Name',
    value: 'John Doe',
    class: 'input-primary',
  }
};
