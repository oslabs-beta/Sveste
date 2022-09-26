<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  export let deleteId;

  function handleClick(id) {
    let target = $blockStore[id].parentId;
    console.log(target);
    blockStore.deleteBlock(target);
  }
</script>

<button on:click|preventDefault={() => handleClick(deleteId)}>-</button>

<style>
  button {
    position: relative;
  }
</style>
