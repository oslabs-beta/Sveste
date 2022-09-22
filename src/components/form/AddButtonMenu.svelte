<script>
  import { testStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  let isVisible = true;

  function addGroup() {
    const newGroup = new Block("group");
    testStore.addBlock(newGroup);
    isVisible = false;
  }
</script>

<menu class:visible={isVisible}>
  <h3>Add new...</h3>
  <button on:click|preventDefault={addGroup}>Group</button>
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
