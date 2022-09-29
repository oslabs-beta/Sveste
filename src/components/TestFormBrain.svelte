<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Block from "./form/Block.svelte";
  import { testStore } from "../models/store";
  import { POST } from "../controllers/submitForm";
</script>

<div>
  <form on:submit|preventDefault={() => POST("/tests", $testStore)}>
    <h2>Test Code Builder</h2>
    <p>Start crafting your test code by adding a describe block below:</p>
    <Block
      id={$testStore["id"]}
      type={$testStore["type"]}
      children={$testStore["children"]}
    />
    <button type="submit">Submit</button>
  </form>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
