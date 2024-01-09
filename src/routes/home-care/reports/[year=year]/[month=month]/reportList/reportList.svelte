<script lang="ts">
  import classNames from 'classnames';
  import type { WorkReport } from '$lib/models/workReport';
  import RowTimeRange from '../timeRange/timeRange.svelte';
  import RecipientName from '../recipientName/recipientName.svelte';
  import WorkTimes from '../workTimes/workTimes.svelte';
  import Point from '../point/point.svelte';
  import ReportStatusIcon from '../reportStatusIcon/reportStatusIcon.svelte';

  export let reports: WorkReport[] = [];

  const className = classNames(
    'grid',
    'grid-cols-[minmax(8rem,1fr)_auto_2rem]',
    'gap-x-4',
    'gap-y-1',
    'p-2',
    'border-b',
  );

  const iconClassName = classNames(
    'col-start-3',
    'row-start-1',
    'row-span-2',
    'self-center',
  );
</script>

<ul>
  {#each reports as report}
    <li class={className}>
      <RowTimeRange {...report.workPeriod} />
      <Point points={report.points} />
      <RecipientName name={report.recipient.name} />
      <WorkTimes workTimes={report.workTimes} />
      <ReportStatusIcon status={report.status} class={iconClassName} />
    </li>
  {/each}
</ul>
