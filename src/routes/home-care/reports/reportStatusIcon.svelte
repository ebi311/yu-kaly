<script lang="ts">
  import type { WorkReportStatus } from '$lib/models/workReport';
  import { CircleCheckRegular, PenSolid } from 'svelte-awesome-icons';

  export let status: WorkReportStatus = 'done';
</script>

<div class={$$props['class']}>
  {#if status === 'done'}
    <CircleCheckRegular class="text-success" />
  {:else if status === 'pending'}
    <PenSolid class="text-orange-500" />
  {/if}
</div>
