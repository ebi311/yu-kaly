<script lang="ts">
  import type { CareCategory } from '$lib/models/workReport';

  const categories: Record<CareCategory, string> = {
    'physical care': '身体',
    'live care': '生活',
    'attend hospital': '通院等',
  };
  export let category: CareCategory = 'physical care';
  export let time = 0;
</script>

<span class="whitespace-nowrap">
  <span class="text-sm text-base-content text-opacity-75">
    {categories[category]}:
  </span>
  <span>
    {time} 分
  </span>
</span>
