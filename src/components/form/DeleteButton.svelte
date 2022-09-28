<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  export let id;

  function handleClick(id) {
    let target = $blockStore[id];
    blockStore.deleteBlock(target);
  }
</script>

<button type="button" on:click|preventDefault={() => handleClick(id)}>-</button>

<style>
  button {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
