<script>
  import { idStore, testStore } from "../../models/store";
  import AddButton from "./AddButton.svelte";
  import DeleteButton from "./DeleteButton.svelte";
  import { blockRef } from "../../controllers/blockTypes";
  export let id, value, type;
  function getComponent() {
    console.log($testStore);
    for (let ref of blockRef) {
      if (ref.type === type) return ref.component;
    }
  }
</script>

<div>
  <svelte:component this={getComponent()} {id} {value} />
  <AddButton addToId={id} />
  <!-- <DeleteButton deleteId={id} deleteFromId={parentId} /> -->
</div>

<style>
</style>
