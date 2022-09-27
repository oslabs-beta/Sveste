<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Block from "./form/Block.svelte";
  import { testStore } from "../models/store";
</script>

<form>
  <h2>Test Code Builder</h2>
  <p>Start crafting your test code by adding a describe block below:</p>
  <Block
    id={$testStore["id"]}
    type={$testStore["type"]}
    children={$testStore["children"]}
  />
  <!-- <AddButton addToId="root0" /> -->
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
</style>
