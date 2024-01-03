<script>
  import { format } from 'date-fns';
  import { ja } from 'date-fns/locale';

  export let date = new Date();

  $: formattedDate = format(date, 'M月d日 (ccc)', { locale: ja });
</script>

<section class="bg-base-300 px-2">
  <h2>{formattedDate}</h2>
</section>
