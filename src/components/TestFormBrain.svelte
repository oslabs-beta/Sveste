<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Group from "./form/Group.svelte";
  import { testStore } from "../models/store";
</script>

<form>
  <AddButton />
  {#if $testStore["children"]}
    {#each $testStore["children"] as block, id (block.id)}
      <Group {id} {...block} />
      <AddButton />
      <DeleteButton />
    {/each}
  {/if}
  <!-- <button on:click|preventDefault={addGroup}>Add Group</button> -->
</form>

<style>
</style>
