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
        return blockTypes.filter((type) => type === "describe");
        break;

      case /root/.test(addToId):
        return blockTypes.filter((type) => type === "describe");
        break;

      case /describe/.test(addToId):
        return blockTypes.filter((type) => type === "mock" || type === "test");
        break;

      case /mockStatement/.test(addToId):
        return [];

      case /mock/.test(addToId):
        return blockTypes.filter(
          (type) =>
            type === "mockStatement" || type === "render" || type === "event"
        );
        break;

      case /test/.test(addToId):
        return blockTypes.filter(
          (type) => type === "expect" || type === "render" || type === "event"
        );

      case /expect/.test(addToId):
        return blockTypes.filter(
          (type) => type === "query" || type === "render"
        );
        break;

      case /query/.test(addToId):
        return blockTypes.filter((type) => type === "assertion");
        break;

      case /render/.test(addToId):
        return blockTypes.filter((type) => type === "assertion");
        break;
      case /assertion/.test(addToId):
        return [];

      case /event/.test(addToId):
        return [];

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
    /* position: relative; */
    border: 1px solid var(--primary);
    padding: 1rem;
    list-style-type: none;
    left: 2rem;
    background: var(--background);
  }
</style>
