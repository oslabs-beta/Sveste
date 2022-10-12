<script>
  import { onMount } from "svelte";
  export let name;
  let textarea;

  onMount(() => {
    textarea.select();
    document.execCommand("copy");
  });
</script>

<textarea bind:value={name} bind:this={textarea} />
