<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import { blockRef } from "../../controllers/blockTypes";
  export let addToId: string;
  export let menu;

  let blockTypes = blockRef.map((obj) => obj.type);
  function addBlock(blockType: string) {
    const newBlock = new Block(blockType, addToId);
    testStore.addBlock(newBlock);
    $blockStore[newBlock.id] = newBlock;
    console.log($blockStore);
    menu = null;
  }
</script>

<menu>
  <h3>Add new...</h3>
  {#each blockTypes as blockType (blockType)}
    <button on:click|preventDefault={() => addBlock(blockType)}
      >{blockType}</button
    >
  {/each}
</menu>

<style>
  menu {
    /* visibility: hidden; */
    position: absolute;
    border: 1px solid var(--primary);
    padding: 1rem;
    list-style-type: none;
    left: 2rem;
    background: var(--background);
  }
</style>
