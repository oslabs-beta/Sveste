<script>
  import { testStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";

  function addGroup() {
    const newGroup = new Block("group");
    testStore.addBlock(newGroup);
    // groups = [...groups, newGroup];
  }
</script>

<menu>
  <h3>Add new...</h3>
  <button on:click|preventDefault={addGroup}>Group</button>
</menu>

<style>
  menu {
    border: 1px solid var(--primary);
    padding: 1rem;
    list-style-type: none;
  }
</style>
