import { render } from '@testing-library/svelte';
import DateDivider from './dateDivider.svelte';

test('should render the formatted date', () => {
  const { getByRole } = render(DateDivider, {
    props: { date: new Date('2024-01-01T09:00:00Z') },
  });
  const dateContent = getByRole('heading').textContent;
  expect(dateContent).toBe('1月1日 (月)');
});
