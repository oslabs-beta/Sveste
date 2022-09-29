<script>
  import { testStore } from "../../models/store";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  import { blockRef } from "../../controllers/blockTypes";
  export let addToId, type;
  let menu = null;
  let blockTypes = blockRef.map((obj) => obj.type);
  function handleClick() {
    menu = !menu ? AddButtonMenu : null;
  }
</script>

<button type="button" on:click|preventDefault={handleClick}
  >+{addToId.replace(/[0-9]/g, "")}</button
>
<svelte:component this={menu} {addToId} bind:menu />

<style>
  button {
    display: flex;
    width: fit-content;
    align-self: center;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
</style>
