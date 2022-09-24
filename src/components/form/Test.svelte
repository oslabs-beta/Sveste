<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<p>Test:</p>
<input bind:value={$blockStore[id]["value"]} />
