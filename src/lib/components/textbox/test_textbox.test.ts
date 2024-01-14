import { render, fireEvent } from '@testing-library/svelte';
import Textbox from './textbox.svelte';

describe('Textbox', () => {
  it('renders with label and value', () => {
    const label = 'Username';
    const value = 'JohnDoe';

    const { getByLabelText } = render(Textbox, { label, value, class: '' });

    const input = getByLabelText(label) as HTMLInputElement;
    expect(input.value).toBe(value);
  });

  it('updates value on input change', async () => {
    const label = 'Username';
    const value = 'JohnDoe';

    const { getByLabelText } = render(Textbox, { label, value, class: '' });

    const input = getByLabelText(label) as HTMLInputElement;
    const newValue = 'JaneDoe';

    await fireEvent.input(input, { target: { value: newValue } });

    expect(input.value).toBe(newValue);
  });
  it('custom class', () => {
    // 独自のクラスを指定すると、デフォルトのものとマージされる
    const label = 'Username';
    const value = 'JohnDoe';
    const customClass = 'custom-class';

    const { getByLabelText } = render(Textbox, { label, value, class: customClass });

    const input = getByLabelText(label) as HTMLInputElement;
    
    expect(input.classList.contains('input')).toBe(true);
    expect(input.classList.contains(customClass)).toBe(true);
  })
});