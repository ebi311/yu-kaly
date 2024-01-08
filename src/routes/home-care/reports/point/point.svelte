<script>
  import classNames from 'classnames';
  export let points = 0;
  $: classes = classNames('text-xl', $$props['class']);
</script>

<span>
  <span class={classes} role="presentation" aria-label="point">{points}</span>
  <span>pt</span>
</span>
