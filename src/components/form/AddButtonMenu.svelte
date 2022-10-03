<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import { blockRef } from "../../controllers/blockTypes";
  import { clickOutside } from "../../controllers/click_outside";
  export let addToId: string;
  export let menu;
  let showMenu = true;
  let blockTypes = blockRef.map((obj) => obj.type);
  let handleBlocks = handleBlockTypes();
  blockTypes = handleBlocks;
  console.log(addToId);
  $: if (addToId === "root0") console.log("im a root");
  function addBlock(blockType: string) {
    const newBlock = new Block(blockType, addToId);
    blockStore.upsertBlock(newBlock);
    menu = null;
  }
  function handleClickOutside(event, value) {
    console.log(value);
    showMenu = false;
  }
  function handleBlockTypes() {
    switch (true) {
      case !addToId:
        return blockTypes.filter((type) => type === "describeStatement");
        break;

      case /root/.test(addToId):
        return blockTypes.filter((type) => type === "describeStatement");
        break;

      case /describeStatement/.test(addToId):
        return blockTypes.filter(
          (type) => type === "describeStatement" || type === "testStatement"
        );

      case /modifierBlock/.test(addToId):
        return [];
        break;

      case /testStatement/.test(addToId):
        return blockTypes.filter(
          (type) =>
            type === "executionBlock" ||
            type === "renderBlock" ||
            type === "modifierBlock"
        );

      case /executionBlock/.test(addToId):
        return [];
        break;

      case /renderBlock/.test(addToId):
        return blockTypes.filter((type) => type === "assertion");
        break;

      default:
        return blockTypes;
    }
  }
</script>

<menu>
  <h3>Add new...</h3>
  <div class="buttonWrapper">
    {#each blockTypes as blockType (blockType)}
      <button on:click|preventDefault={() => addBlock(blockType)}
        >{blockType}</button
      >
    {/each}
  </div>
</menu>

<style>
  menu {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    border: 2px solid var(--primary);
    margin: 0.5rem 0;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--transparent);
    align-items: center;
  }
  h3 {
    margin: 0 0 1rem 0;
    color: var(--text-mid);
  }
  .buttonWrapper {
    display: flex;
    gap: 0.5rem;
  }
  button {
    font-size: 1rem;
    background: var(--transparent);
    color: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 2rem;
    padding: 0.5rem 1rem;
  }
  button:hover {
    background: var(--primary);
    color: white;
  }
</style>
