<script lang="ts">
  import NavBlock from "./NavBlock.svelte";
  import { testStore } from "../models/store";
  // dummy data for now
</script>

<div>
  <NavBlock
    blockType={"parent"}
    name={$testStore["type"] || "root"}
    children={$testStore["children"]}
    id={$testStore["id"]}
  />
</div>

<style>
</style>
