<script lang="ts">
  import Group from "./form/Group.svelte";
  import { testStore } from "../store";

  let groups = [];

  function addGroup() {
    const newGroup = testStore.createGroup();
    groups = [...groups, newGroup];
  }
  function deleteGroup(group) {
    groups = groups.filter((g) => g !== group);
    testStore.deleteGroup(group.get("id"));
  }
</script>

<form>
  {#each groups as group (group.get("id"))}
    <Group id={group.get("id")} />
    <button on:click|preventDefault={() => deleteGroup(group)}
      >Delete Group</button
    >
  {/each}
  <button on:click|preventDefault={addGroup}>Add Group</button>
</form>

<style>
</style>
