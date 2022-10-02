<script lang="ts">
  import NavBlock from "./NavBlock.svelte";
  import { blockStore, testStore } from "../models/store";
  import { children } from "svelte/internal";
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
