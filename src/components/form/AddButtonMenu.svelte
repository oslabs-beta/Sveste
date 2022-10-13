<script lang="ts">
  import { blockStore } from '../../models/store';
  import { Block } from '../../controllers/blockClass';
  import { blockRef } from '../../controllers/blockTypes';
  export let addToId: string;
  export let menu;
  let showMenu = true;
  let blockTypes = blockRef.map((obj) => obj.type);
  let handleBlocks = handleBlockTypes();
  blockTypes = handleBlocks;

  $: if (addToId === 'root0') console.log('im a root');

  export function addBlock(blockType: string) {
    const newBlock = new Block(blockType, addToId);
    blockStore.upsertBlock(newBlock);
    menu = null;
  }
  function handleClickOutside() {
    showMenu = false;
  }
  function handleBlockTypes() {
    switch (true) {
      case !addToId:
        return blockTypes.filter((type) => type === 'describeStatement');
        break;

      case /root/.test(addToId):
        return blockTypes.filter((type) => type === 'describeStatement');
        break;

      case /describeStatement/.test(addToId):
        return blockTypes.filter(
          (type) => type === 'describeStatement' || type === 'testStatement'
        );

      case /modifierBlock/.test(addToId):
        return [];
        break;

      case /testStatement/.test(addToId):
        return blockTypes.filter(
          (type) =>
            type === 'executionBlock' ||
            type === 'renderBlock' ||
            type === 'actionBlock' ||
            type === 'modifierBlock'
        );

      case /executionBlock/.test(addToId):
        return [];
        break;

      case /renderBlock/.test(addToId):
        return blockTypes.filter((type) => type === 'assertion');
        break;

      default:
        return blockTypes;
    }
  }
</script>

<menu>
  <h3>Add new:</h3>
  <div class="buttonWrapper">
    {#each blockTypes as blockType (blockType)}
      <button on:click|preventDefault={() => addBlock(blockType)}
        >{blockType
          .replace(/([a-z]*)(Statement|Block|)/g, '$1 $2')
          .toLowerCase()}</button
      >
    {/each}
  </div>
</menu>

<style>
  menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    border: 1px solid var(--primary-mid);
    margin: 1rem 0;
    padding: 2rem 1rem;
    border-radius: 0.5rem;
    background: var(--transparent);
    justify-content: center;
    align-items: baseline;
    gap: 1rem;
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
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
  button:hover {
    background: var(--primary);
    color: white;
  }
</style>
