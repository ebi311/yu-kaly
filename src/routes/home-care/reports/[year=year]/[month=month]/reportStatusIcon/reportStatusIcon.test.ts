import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import ReportStatusIcon from './reportStatusIcon.svelte';

describe('ReportStatusIcon', () => {
  it('should render CircleCheckRegular icon when status is "done"', () => {
    const { container } = render(ReportStatusIcon, {
      props: { status: 'done' },
    });
    expect(container.querySelector('.text-success')).toBeInTheDocument();
  });

  it('should render PenSolid icon when status is "pending"', () => {
    const { container } = render(ReportStatusIcon, {
      props: { status: 'pending' },
    });
    expect(container.querySelector('.text-orange-500')).toBeInTheDocument();
  });
});
