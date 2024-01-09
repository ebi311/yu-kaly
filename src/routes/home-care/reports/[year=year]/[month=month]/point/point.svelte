<script lang="ts">
  import classNames from 'classnames';
  export let points: number;
  $: classes = classNames('text-xl', $$props['class']);
</script>

<span>
  <span class={classes} role="presentation" aria-label="point">{points}</span>
  <span>pt</span>
</span>
