<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import Group from "./form/Group.svelte";
  import { testStore } from "../models/store";
  import { Block } from "../controllers/blockClass";

  function deleteGroup(group) {
    testStore.deleteBlock(group);
  }
</script>

<form>
  <AddButton />
  {#each $testStore["children"] as group (group.id)}
    <Group id={group.id} />
    <button on:click|preventDefault={() => deleteGroup(group)}
      >Delete Group</button
    >
  {/each}
  <!-- <button on:click|preventDefault={addGroup}>Add Group</button> -->
</form>

<style>
</style>
