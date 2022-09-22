<script lang="ts">
  import Group from "./form/Group.svelte";
  import { testStore } from "../store";
  // HTTP Request/Response Logic Here
  //handles button logic
  let groups = [];
  let gid = 0;
  function addGroup() {
    console.log("in add group");
    const newGroup = {
      id: "G1",
    };
    const id = gid++;
    newGroup.id = `G${id}`;
    testStore.addGroup(newGroup.id, newGroup);
    groups = [...groups, newGroup];
  }
  function deleteGroup(group) {
    groups = groups.filter((g) => g !== group);
    testStore.deleteGroup(group.id);
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
