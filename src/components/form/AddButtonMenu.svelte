<script>
  import { testStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import { blockTypes } from "../../controllers/blockTypes";
  let isVisible = true;

  function addBlock(blockType) {
    const newGroup = new Block(blockType);
    testStore.addBlock(newGroup);
    isVisible = false;
  }
</script>

<menu class:visible={isVisible}>
  <h3>Add new...</h3>
  {#each blockTypes as blockType (blockType)}
    <button on:click|preventDefault={() => addBlock(blockType)}
      >{blockType}</button
    >
  {/each}
</menu>

<style>
  menu {
    visibility: hidden;
    position: absolute;
    border: 1px solid var(--primary);
    padding: 1rem;
    list-style-type: none;
    left: 2rem;
    background: var(--background);
  }
  menu.visible {
    visibility: visible;
  }
</style>
