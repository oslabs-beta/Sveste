<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<div {id}>
  <input
    required
    id="testInput"
    name="testInput"
    bind:value={$blockStore[id].value}
  />
  <label for="testInput">Test Description</label>
</div>
