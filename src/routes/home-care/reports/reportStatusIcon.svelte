<script lang="ts">
  import { CircleCheckRegular, PenSolid } from 'svelte-awesome-icons';
  export let status: 'done' | 'pending' = 'done';
</script>

<div>
  {#if status === 'done'}
    <CircleCheckRegular class="text-success" />
  {:else if status === 'pending'}
    <PenSolid class="text-orange-500" />
  {/if}
</div>
