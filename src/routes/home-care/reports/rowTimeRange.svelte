<script>
  import { format } from 'date-fns';

  export let start = new Date();
  export let end = new Date();

  $: startTimeString = format(start, 'H:mm');
  $: endTimeString = format(end, 'H:mm');
</script>

<span>
  {startTimeString} - {endTimeString}
</span>
