<script lang="ts">
  import { testStore } from "../../models/store";
  import AddButtonOptions from "./AddButtonOptions.svelte";
  let module = null;
  function handleClick() {
    module = module === null ? AddButtonOptions : null;
  }
</script>

<button on:click|preventDefault={handleClick}>+</button>
<svelte:component this={module} />
