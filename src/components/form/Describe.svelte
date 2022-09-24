<script>
  import { blockStore } from "../../models/store";
  export let id;
  let value = $blockStore[id]["value"];
</script>

<p>Describe:</p>
<input bind:value={$blockStore[id]["value"]} />
