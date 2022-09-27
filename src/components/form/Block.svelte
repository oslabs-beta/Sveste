<script>
  import { idStore, testStore } from "../../models/store";
  import AddButton from "./AddButton.svelte";
  import DeleteButton from "./DeleteButton.svelte";
  import { blockRef } from "../../controllers/blockTypes";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  export let id,
    type,
    parentId,
    value,
    children = [],
    indent = 0;
  function getComponent() {
    for (let ref of blockRef) {
      if (ref.type === type) return ref.component;
    }
  }
</script>

{#if id}
  <div class="blockWrapper" style="padding-left: {indent}em">
    <svelte:component this={getComponent()} {id} />
    {#if id !== "root0"}
      <div class="buttonWrapper">
        <AddButton addToId={id} />
        <DeleteButton {id} />
      </div>
    {/if}
    {#each children as child}
      <svelte:self {...child} indent={indent + 1} />
    {/each}
  </div>
{/if}

<style>
  .blockWrapper {
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid var(--tertiary);
    margin: 0.25rem;
  }
  .buttonWrapper {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin: 0.25rem;
  }
</style>
