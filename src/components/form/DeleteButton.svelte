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
    display: flex;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1.4rem;
    align-items: center;
    justify-content: center;
    color: var(--highlight);
    border: none;
    background: transparent;
  }
  button:hover {
    background-color: var(--highlight);
    color: white;
  }
</style>
