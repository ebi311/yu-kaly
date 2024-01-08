import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import TimeRange from './timeRange.svelte';

describe('TimeRange component', () => {
  it('should display the correct start and end time', () => {
    const start = new Date('2022-01-01T09:00:00');
    const end = new Date('2022-01-01T17:00:00');

    const { getByRole } = render(TimeRange, { props: { start, end } });
    const timeRangeElement = getByRole('presentation', { name: 'time-range' });
    expect(timeRangeElement).toHaveTextContent('9:00 - 17:00');
  });
});
