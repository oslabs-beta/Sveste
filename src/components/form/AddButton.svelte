<script>
  import AddButtonMenu from './AddButtonMenu.svelte';
  import { blockRef } from '../../controllers/blockTypes';
  export let addToId,
    active = false;
  let menu = null;
  let blockTypes = blockRef.map((obj) => obj.type);
  function handleClick(e) {
    menu = !menu ? AddButtonMenu : null;
    active = !active;
  }
</script>

<button type="button" class:active on:click|preventDefault={handleClick}
  >+ {addToId
    ? addToId.replace(/(.)(statement|block|)([0-9])/gi, '$1 $2').toLowerCase()
    : 'root'}</button
>
<svelte:component this={menu} {addToId} bind:menu />

<style>
  button {
    display: flex;
    width: fit-content;
    font-size: 1rem;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: var(--primary);
    background-color: transparent;
    border: 1px solid var(--primary);
  }
  button:hover,
  button.active {
    background-color: var(--primary);
    color: white;
  }
</style>
