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

<!-- {#if id} -->
<div class="blockWrapper" style="padding-left: {indent}em">
  <div />
  <div class="buttonWrapper">
    <!-- {#if id !== 'root0'} -->
    <AddButton addToId={id} />
    <!-- {/if} -->
    <DeleteButton {id} />
  </div>
  <div class="inputWrapper">
    <svelte:component this={getComponent()} {id} />

    {#each children as child}
      <svelte:self {...child} indent={indent + 1} />
    {/each}
  </div>
</div>

<!-- {/if} -->
<style>
  .blockWrapper {
    display: grid;
    grid-template-columns: 95% 5%;
    grid-template-rows: auto;
    /* grid-template-areas: '... buttons', 'input input'; */
    /* gap: 0.5rem; */
    border: 1px solid var(--tertiary);
    /* margin: 0.5rem; */
  }
  .inputWrapper {
    /* grid-area: input; */
  }
  .buttonWrapper {
    display: flex;
    justify-content: end;
  }
</style>
