<script lang="ts">
  import { testStore } from "../../models/store";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  export let addToId;
  let menu = null;
  function handleClick() {
    menu = menu === null ? AddButtonMenu : null;
  }
</script>

<button on:click|preventDefault={handleClick}>+</button>
<svelte:component this={menu} {addToId} />

<style>
  button {
    position: relative;
  }
</style>
