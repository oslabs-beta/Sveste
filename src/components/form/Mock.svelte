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
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  <label for="mockInput">Mock</label>
</div>

<style>
  div {
    display: flex;
    width: 100%;
    position: relative;
  }
  select {
    width: 100%;
    height: 2.5rem;
    font-size: 0.9rem;
    padding-top: 0.5rem;
    padding-left: 0.1rem;
  }
  option {
    bottom: 0;
    /* padding: 0.6rem 0 0 0.4rem; */
  }
  label {
    position: absolute;
    left: 0.5rem;
    top: 0.75rem;
    transform-origin: left top;
    transition: transform 100ms ease-in-out;
  }

  select:focus + label,
  select:valid + label {
    transform: translateY(-50%) scale(0.7);
    color: var(--secondary);
  }
</style>
