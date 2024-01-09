<script lang="ts">
  import type { WorkReportsEveryDate } from '$lib/models/workReport';
  import DateDivider from './dateDivider/dateDivider.svelte';
  import ReportList from './reportList/reportList.svelte';

  export const pageTitle = 'レポート一覧';

  export let reportsEveryDate: WorkReportsEveryDate[] = [
    {
      date: new Date('2021-10-01'),
      reports: [
        {
          id: '1',
          workPeriod: {
            start: new Date('2021-10-01 09:00'),
            end: new Date('2021-10-01 18:00'),
          },
          points: 8,
          recipient: {
            id: 'u001',
            name: '山田太郎',
          },
          workTimes: {
            'attend hospital': 10,
            'live care': 20,
            'physical care': 30,
          },
          status: 'done',
        },
      ],
    },
    {
      date: new Date('2021-10-02'),
      reports: [
        {
          id: '2',
          workPeriod: {
            start: new Date('2021-10-02 09:00'),
            end: new Date('2021-10-02 18:00'),
          },
          points: 8,
          recipient: {
            id: 'u001',
            name: '山田次郎',
          },
          workTimes: {
            'attend hospital': 30,
            'live care': 20,
            'physical care': 10,
          },
          status: 'done',
        },
        {
          id: '3',
          workPeriod: {
            start: new Date('2021-10-02 09:00'),
            end: new Date('2021-10-02 18:00'),
          },
          points: 8,
          recipient: {
            id: 'u002',
            name: '山田花子',
          },
          workTimes: {
            'attend hospital': 10,
            'live care': 20,
            'physical care': 30,
          },
          status: 'done',
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>レポート一覧</title>
</svelte:head>
<div>
  {#each reportsEveryDate as { date, reports }}
    <DateDivider {date} />
    <ReportList {reports} />
  {/each}
</div>
