<script lang="ts">
  import { blockStore } from "../../models/store";
  export let id;

  let selectedQuery;
  let argument;
  function updateVal() {
    $blockStore[id]["value"] = `screen.${selectedQuery}('${argument}')`;
  }

  const queries = ["toContain", "toBe", "toBeTruthy"];
</script>

<div>
  <p>expect...</p>
</div>

<style>
  div {
    display: flex;
    width: 100%;
  }
</style>
