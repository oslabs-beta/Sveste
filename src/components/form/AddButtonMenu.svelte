<script lang="ts">
  import { testStore, blockStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import { blockRef } from "../../controllers/blockTypes";
  export let addToId: string;
  export let menu;

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
  function handleBlockTypes() {
    switch (true) {
      case !addToId:
        return blockTypes.filter((type) => type === "describe");
        break;

      case /root/.test(addToId):
        return blockTypes.filter((type) => type === "describe");
        break;

      case /describe/.test(addToId):
        return blockTypes.filter((type) => type === "mock" || type === "test");
        break;

      case /mock/.test(addToId):
        return blockTypes.filter((type) =>
          ["mockStatement", "render", "events"].includes(type)
        );
        break;

      // case /test/.test(addToId):
      //   return blockTypes.filter((type) => type === 'test');

      case /expect/.test(addToId):
        return blockTypes.filter((type) => type === "query");
        break;

      case /query/.test(addToId):
        return blockTypes.filter((type) => type === "assertion");
        break;

      default:
        return blockTypes;
    }
  }
</script>

<menu>
  <h3>Add new Component</h3>

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
