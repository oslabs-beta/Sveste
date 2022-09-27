<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  export let id;

  function handleClick(id) {
    let target = $blockStore[id];
    console.log(target);
    blockStore.deleteBlock(target);
  }
</script>

<button on:click|preventDefault={() => handleClick(id)}>-</button>

<style>
  button {
    position: relative;
    max-width: fit-content;
    align-self: center;
  }
</style>
