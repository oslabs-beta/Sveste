<script>
  import { blockStore } from "../../models/store";
  export let id;
  let options = ["beforeEach", "beforeAll"];
</script>

<div>
  <label for="mockInput">Mock</label>
  <select id="mockInput" name="mockInput" bind:value={$blockStore[id]["value"]}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>

<style>
  div {
    display: flex;
    width: 100%;
    position: relative;
  }
  select {
    width: 100%;
  }
  label {
    position: absolute;
    left: 0.25rem;
    z-index: 1;
  }
</style>
