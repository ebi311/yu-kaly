import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Time from './time.svelte';

describe('Time component', () => {
  it('renders the physical care category and time', () => {
    const category = 'physical care';
    const time = 60;

    const { getByRole } = render(Time, { props: { category, time } });
    const timeByCareType = getByRole('presentation', {
      name: 'time-by-care-type',
    });
    expect(timeByCareType).toHaveTextContent('身体: 60 分');
  });
  it('render the live care category and time', () => {
    const category = 'live care';
    const time = 45;

    const { getByRole } = render(Time, { props: { category, time } });
    const timeByCareType = getByRole('presentation', {
      name: 'time-by-care-type',
    });
    expect(timeByCareType).toHaveTextContent('生活: 45 分');
  });
  it('render the attend school category and time', () => {
    const category = 'attend hospital';
    const time = 30;

    const { getByRole } = render(Time, { props: { category, time } });
    const timeByCareType = getByRole('presentation', {
      name: 'time-by-care-type',
    });
    expect(timeByCareType).toHaveTextContent('通院等: 30 分');
  });
});
