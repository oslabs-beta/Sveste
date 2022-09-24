<script>
  import { blockStore } from "../../models/store";
  export let id;
  let options = ["beforeEach", "beforeAll"];
</script>

<p>Mock:</p>

<select bind:value={$blockStore[id]["value"]}>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>
