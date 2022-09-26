<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import { blockRef } from "../../controllers/blockTypes";
  export let addToId: string;
  export let menu;

  let blockTypes = blockRef.map((obj) => obj.type);
  let handleBlocks = handleBlockTypes();
  blockTypes = handleBlocks;
  $: if (addToId === "root1") console.log("im a root");
  function addBlock(blockType: string) {
    const newBlock = new Block(blockType, addToId);
    blockStore.upsertBlock(newBlock);
    menu = null;
  }
  function handleBlockTypes() {
    if (addToId.includes("mock"))
      return blockTypes.filter((type) => type === "render" || type === "query");
    if (addToId.includes("root"))
      return blockTypes.filter((type) => type === "describe");
    if (addToId.includes("describe"))
      return blockTypes.filter((type) => type === "mock" || type === "test");
    if (addToId.includes("expect"))
      return blockTypes.filter((type) => type === "query");
    if (addToId.includes("query"))
      return blockTypes.filter((type) => type === "assertion");
    else return blockRef.map((obj) => obj.type);
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
