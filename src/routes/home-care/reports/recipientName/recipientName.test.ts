import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import RecipientName from './recipientName.svelte';

describe('RecipientName', () => {
  it('renders the name correctly', () => {
    const name = 'John Doe';
    const { getByRole } = render(RecipientName, { props: { name } });
    const nameElement = getByRole('presentation', { name: 'name' });
    expect(nameElement).toHaveTextContent(name);
  });
});
