import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import Point from './point.svelte';

describe('Point component', () => {
  it('should render with default props', () => {
    const { getByRole } = render(Point);
    const pointElement = getByRole('presentation', { name: 'point' });
    expect(pointElement).toHaveTextContent('0');
  });

  it('should render with custom points', () => {
    const { getByRole } = render(Point);
    const pointElement = getByRole('presentation', { name: 'point' });
    expect(pointElement).toHaveTextContent('10');
  });

  it('should apply custom class', () => {
    const { container } = render(Point, { props: { class: 'custom-class' } });
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });
});
