<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Block from "./form/Block.svelte";
  import { testStore } from "../models/store";
</script>

<form>
  <AddButton addToId="root0" />
  {#if $testStore["children"]}
    {#each $testStore["children"] as block}
      <Block id={block.id} parentId={block.parentId} />
    {/each}
    <AddButton addToId="root0" />
  {/if}
</form>

<style>
</style>
