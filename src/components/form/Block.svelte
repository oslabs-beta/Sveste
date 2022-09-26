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
  let open = false;
  function toggleOpen() {
    open = !open;
    console.log(children[0].id);
  }
</script>

<div style="padding-left: {indent}em">
  {#if id}
    <svelte:component this={getComponent()} {id} />
    <AddButton addToId={id} />

    {#each children as child}
      <svelte:self {...child} indent={indent + 1} />
    {/each}
  {/if}
</div>

<style>
</style>
