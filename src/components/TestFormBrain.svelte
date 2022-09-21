<script lang="ts">
  import Group from "./form/Group.svelte";
  import { store } from "../store";
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
    store.addGroup(newGroup.id, newGroup);
    groups = [...groups, newGroup];
  }
  function deleteGroup(group) {
    groups = groups.filter((g) => g !== group);
    store.deleteGroup(group.id);
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
