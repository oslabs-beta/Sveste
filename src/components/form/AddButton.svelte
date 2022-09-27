<script>
  import { testStore } from "../../models/store";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  export let addToId;
  let menu = null;
  function handleClick() {
    menu = !menu ? AddButtonMenu : null;
  }
</script>

<button on:click|preventDefault={handleClick}>+</button>
<svelte:component this={menu} {addToId} bind:menu />

<style>
  button {
    /* display: flex;
    width: fit-content;
    align-self: center;
    margin: auto; */
  }
</style>
