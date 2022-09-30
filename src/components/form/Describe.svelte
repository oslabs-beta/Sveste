<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<div>
  <input
    required
    id="describeInput"
    name="describeInput"
    bind:value={$blockStore[id].value}
  />
  <label for="describeInput">Describe</label>
</div>
