<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<p>Render Component:</p>
<input bind:value={$blockStore[id]["value"]} />
