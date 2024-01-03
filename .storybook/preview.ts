import type { Preview } from '@storybook/svelte';
import Decorator from './decorator.svelte';
import '../src/app.css';
import { Story } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => ({
      Component: Decorator,
      props: {
        story: Story
      }
    })
  ]
};

export default preview;
