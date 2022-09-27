<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  export let id;

  function handleClick(id) {
    let target = $blockStore[id];
    blockStore.deleteBlock(target);
  }
</script>

<button on:click|preventDefault={() => handleClick(id)}>-</button>

<style>
  button {
    /* position: relative; */
    grid-area: buttons;
  }
</style>
