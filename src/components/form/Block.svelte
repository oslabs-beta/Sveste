<script>
  import { idStore, testStore } from "../../models/store";
  import AddButton from "./AddButton.svelte";
  import DeleteButton from "./DeleteButton.svelte";
  import { blockRef } from "../../controllers/blockTypes";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  export let id = "",
    type,
    children = [],
    indent = 0;
  let marginLeft = 0;
  function getComponent() {
    for (let ref of blockRef) {
      if (ref.type === type) return ref.component;
    }
  }
</script>

<div class="blockWrapper">
  <div class="inputWrapper">
    <svelte:component this={getComponent()} {id} />
    <DeleteButton {id} />
  </div>
  <AddButton addToId={id} {type} />

  {#each children as child}
    <svelte:self {...child} indent={indent + 1} />
  {/each}
</div>

<style>
  .blockWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.25rem 0;
    gap: 0.25rem;
    justify-content: space-between;
  }
  .inputWrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  /* configure all child component inputs below */
  .inputWrapper :global(div) {
    display: flex;
    flex-direction: row;
    justify-self: start;
    width: 90%;
    position: relative;
  }
  .inputWrapper :global(label) {
    position: absolute;
    left: 0.25rem;
    top: 0.5rem;
    transform-origin: left top;
    transition: transform 100ms ease-in-out;
    color: var(--secondary);
  }

  .inputWrapper :global(input) {
    width: 100%;
    font-size: 1rem;
    height: 1.5rem;
    padding: 0.5rem 0 0 0.25rem;
    border: none;
    border-bottom: 1px solid var(--tertiary);
    background-color: transparent;
  }
  .inputWrapper :global(select) {
    width: auto;
    height: 2.5rem;
    padding-right: 1rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
  }
  .inputWrapper :global(input:focus + label),
  .inputWrapper :global(input:valid + label) {
    transform: translateY(-50%) scale(0.7);
    color: var(--secondary);
  }

  .inputWrapper :global(select:focus + label),
  .inputWrapper :global(select:valid + label) {
    transform: translateY(-50%) scale(0.7);
    color: var(--secondary);
  }

  .inputWrapper :global(input:focus + label),
  .inputWrapper :global(select:focus + label) {
    color: var(--svestedarkteal);
  }

  .inputWrapper :global(input:focus),
  .inputWrapper :global(select:focus) {
    outline: none;
  }
</style>
