import type { StoryObj, Meta } from '@storybook/svelte';
import TextBox from './textbox.svelte';
import Decorator from './storiesDecorator.svelte';

const meta = {
  title: 'components/Textbox',
  component: TextBox,
  tags: ['autodocs'],
} satisfies Meta<TextBox>;

export default meta;
type Story = StoryObj<TextBox>;

export const Default: Story = {
  decorators: [
    (story) => ({
      Component: Decorator,
      props: {
        story,
      },
    }),
  ],
};
