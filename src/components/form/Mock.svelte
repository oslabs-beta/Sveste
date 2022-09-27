<script>
  import { blockStore } from "../../models/store";
  export let id;
  let options = ["beforeEach", "beforeAll"];
</script>

<label for="mockInput">Mock</label>

<select id="mockInput" name="mockInput" bind:value={$blockStore[id]["value"]}>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>
