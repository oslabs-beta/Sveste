<script lang="ts">
  import { testStore } from "../../models/store";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  let module = null;
  function handleClick() {
    module = module === null ? AddButtonMenu : null;
  }
</script>

<button on:click|preventDefault={handleClick}>+</button>
<svelte:component this={module} />

<style>
  button {
    position: relative;
  }
</style>
