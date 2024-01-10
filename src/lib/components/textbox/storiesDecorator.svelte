<script>
  import TextBox from './textbox.svelte';

  let value = 'value';
</script>

<form>
  <TextBox label="Label" bind:value class="input-primary" name="name" />
  <p>value: {value}</p>
</form>
