<script lang="ts">
  import Group from "./form/Group.svelte";
  import { testStore } from "../models/store";
  import { Block } from "../controllers/blockClass";

  let groups = [];

  function addGroup() {
    const newGroup = new Block("group");
    testStore.addBlock(newGroup);
    console.log($testStore);
    groups = [...groups, newGroup];
  }
  function deleteGroup(group) {
    groups = groups.filter((g) => g !== group);
    testStore.deleteBlock(group);
  }
</script>

<form>
  {#each groups as group (group.id)}
    <Group id={group.id} />
    <button on:click|preventDefault={() => deleteGroup(group)}
      >Delete Group</button
    >
  {/each}
  <button on:click|preventDefault={addGroup}>Add Group</button>
</form>

<style>
</style>
