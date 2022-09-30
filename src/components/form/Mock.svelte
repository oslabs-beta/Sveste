<script>
  import { blockStore } from "../../models/store";
  export let id;
  let options = ["beforeEach", "beforeAll"];
</script>

<div>
  <select
    required
    id="mockInput"
    name="mockInput"
    bind:value={$blockStore[id]["value"]}
  >
    <option>...</option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  <label for="mockInput">Mock</label>
</div>
