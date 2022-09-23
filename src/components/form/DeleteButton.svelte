<script lang="ts">
  import { testStore } from "../../models/store";
  export let deleteId, deleteFromId;

  function handleClick() {
    testStore.deleteBlock(deleteId, deleteFromId);
  }
</script>

<button on:click|preventDefault={handleClick}>-</button>

<style>
  button {
    position: relative;
  }
</style>
