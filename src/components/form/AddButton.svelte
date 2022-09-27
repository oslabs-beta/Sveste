<script>
  import { testStore } from "../../models/store";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  import { blockRef } from "../../controllers/blockTypes";
  export let addToId;
  let menu = null;
  let blockTypes = blockRef.map((obj) => obj.type);
  function handleClick() {
    menu = !menu ? AddButtonMenu : null;
  }
</script>

<button on:click|preventDefault={handleClick}>+</button>
<svelte:component this={menu} {addToId} bind:menu />

<style>
  button {
    display: flex;
    width: fit-content;
    align-self: center;
    margin: auto;
  }
</style>
