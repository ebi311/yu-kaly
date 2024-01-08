<script lang="ts">
  import { format } from 'date-fns';
  import { ja } from 'date-fns/locale';

  export let date: Date;

  $: formattedDate = format(date, 'M月d日 (ccc)', { locale: ja });
</script>

<div class="bg-primary bg-opacity-25 px-2">
  <h2>{formattedDate}</h2>
</div>
