import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import ReportList from './reportList.svelte';
import type { WorkReport } from '$lib/models/workReport';

describe('ReportList', () => {
  it('renders the list of reports', () => {
    const reports: WorkReport[] = [
      {
        id: '001',
        workPeriod: {
          start: new Date('2021-01-01T10:00:00'),
          end: new Date('2021-01-01T11:00:00'),
        },
        recipient: {
          id: '001',
          name: 'John Doe',
        },
        workTimes: {
          'physical care': 10,
          'live care': 20,
          'attend hospital': 30,
        },
        points: 60,
        status: 'done',
      },
      {
        id: '002',
        workPeriod: {
          start: new Date('2021-01-01T12:00:00'),
          end: new Date('2021-01-01T13:00:00'),
        },
        recipient: {
          id: '002',
          name: 'Jean Doe',
        },
        workTimes: {
          'physical care': 10,
          'live care': 20,
          'attend hospital': 30,
        },
        points: 30,
        status: 'pending',
      },
    ];

    const { getAllByRole } = render(ReportList, { props: { reports } });

    const reportItems = getAllByRole('listitem');
    expect(reportItems.length).toBe(reports.length);

    reportItems.forEach((reportItem, index) => {
      const report = reports[index];
      expect(reportItem).toHaveTextContent(report.recipient.name);
      expect(reportItem).toHaveTextContent(report.points.toString());
    });
  });
});
