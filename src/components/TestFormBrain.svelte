<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Block from "./form/Block.svelte";
  import { testStore } from "../models/store";
</script>

<form>
  <Block
    id={$testStore["id"]}
    type={$testStore["type"]}
    parentId={$testStore["parentId"]}
    value={$testStore["value"]}
    children={$testStore["children"]}
  />

  <AddButton addToId="root0" />
</form>

<style>
</style>
