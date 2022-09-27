<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<div>
  <label for="describeInput">Describe</label>
  <input
    id="describeInput"
    name="describeInput"
    bind:value={$blockStore[id].value}
  />
</div>

<style>
  div {
    position: relative;
  }
  input {
    width: 80%;
  }
  label {
    position: absolute;
    left: 0.2rem;
    z-index: 1;
  }
</style>
