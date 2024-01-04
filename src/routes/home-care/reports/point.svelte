<script>
  import classNames from 'classnames';
  export let points = 0;
  $: classes = classNames('text-xl', $$props['class']);
</script>

<span class={classes}>{points} pt</span>
