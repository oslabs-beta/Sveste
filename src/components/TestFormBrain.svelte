<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Block from "./form/Block.svelte";
  import { testStore } from "../models/store";

  let blocks = [];

  $: if ($testStore["children"]) {
    let getChildren = (node, output = []) => {
      if (!node.hasOwnProperty("children")) return output;
      for (let child of node["children"]) {
        output.push(child, ...getChildren(child));
      }
      return output;
    };
    console.log($testStore);
    blocks = getChildren($testStore);
  }
</script>

<form>
  {#each blocks as block (block.id)}
    <Block id={block.id} type={block.type} value={block.value} />
  {/each}
  <AddButton addToId="root0" />
</form>

<style>
</style>
