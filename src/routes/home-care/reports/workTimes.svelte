<script lang="ts">
  import type { WorkTimes } from '$lib/models/workReport';
  import WorkTime from './workTime.svelte';
  import classNames from 'classnames';

  export let workTimes: WorkTimes = {
    'physical care': 0,
    'live care': 0,
    'attend hospital': 0,
  };

  const className = classNames('flex', 'flex-wrap', 'gap-2');
</script>

<div class={className}>
  <WorkTime category="physical care" time={workTimes['physical care']} />
  <WorkTime category="live care" time={workTimes['live care']} />
  <WorkTime category="attend hospital" time={workTimes['attend hospital']} />
</div>
