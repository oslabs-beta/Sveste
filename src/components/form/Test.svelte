<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<labe>it(<input bind:value={$blockStore[id]["value"]} />)</labe>
