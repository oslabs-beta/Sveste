<script>
  import { idStore, testStore } from "../../models/store";
  import AddButton from "./AddButton.svelte";
  import DeleteButton from "./DeleteButton.svelte";
  import { blockRef } from "../../controllers/blockTypes";
  import AddButtonMenu from "./AddButtonMenu.svelte";
  export let id,
    type,
    // parentId,
    // value,
    children = [],
    indent = 0;
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

  {#each children as child}
    <svelte:self {...child} indent={indent + 1} />
  {/each}

  <AddButton addToId={id} />
</div>

<style>
  .blockWrapper {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--tertiary);
    margin: 0;
    padding: 0.25rem 0;
    gap: 0.25rem;
  }
  .inputWrapper {
    display: flex;
    width: 100%;
    gap: 0.25rem;
    justify-content: end;
    align-items: center;
  }
</style>
