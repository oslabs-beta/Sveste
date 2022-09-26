<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Block from "./form/Block.svelte";
  import { blockStore, testStore } from "../models/store";
  import { POST } from "../controllers/submitForm";
  import AddButtonMenu from "./form/AddButtonMenu.svelte";

  // let blocks = [];
  // $: if ($testStore['children']) {
  //   let getChildren = (node, output = []) => {
  //     if (!node.hasOwnProperty('children')) return output;
  //     for (let child of node['children']) {
  //       output.push(child, ...getChildren(child));
  //     }
  //     return output;
  //   };
  //   blocks = getChildren($testStore);
  // }
</script>

<!-- <form on:submit|preventDefault={() => POST('/tests', $testStore)}>
  {#each blocks as block (block['id'])}
    <Block
      id={block['id']}
      type={block['type']}
      on:change={() => blockStore.upsertBlock(block)}
    />
  {/each}
  <AddButton addToId="root0" />
  <button type="submit">Submit</button>
</form> -->

<!-- this should work with svelte:self -->
<form>
  <Block {...$testStore} />

  <AddButton addToId="root0" />
</form>

<style>
</style>
