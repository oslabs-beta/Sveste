<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<p>Describe:</p>
<input bind:value={$blockStore[id]["value"]} />
