import type { StoryObj, Meta } from '@storybook/svelte';
import ReportRow from './reportRow.svelte';

const meta = {
  title: 'reports/Report Row',
  component: ReportRow,
  tags: ['autodocs'],
} satisfies Meta<ReportRow>;

export default meta;
type Story = StoryObj<ReportRow>;

export const Default: Story = {
  args: {
    reports: [
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
          name: 'Jane Doe',
        },
        workTimes: {
          'physical care': 10,
          'live care': 20,
          'attend hospital': 30,
        },
        points: 30,
        status: 'pending',
      },
    ],
  },
};
