<script lang="ts">
  import classNames from 'classnames';
  import { nanoid } from 'nanoid';
  import type { HTMLInputAttributes } from 'svelte/elements';

  interface $$Props extends HTMLInputAttributes {
    label: string;
    value: string;
    class: string;
  }
  export let label: string;
  export let value: string;
  export const id = nanoid();

  let inputProps: HTMLInputAttributes;
  $: {
    const inputClass = classNames(
      'input',
      'input-bordered',
      $$props['class'] || '',
    );
    inputProps = { ...$$restProps, class: inputClass };
  }
</script>

<p>
  <label for={id} class="label"><span class="label-text">{label}</span></label>
  <input {id} bind:value {...inputProps} />
</p>
