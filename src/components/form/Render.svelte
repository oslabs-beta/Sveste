<script>
  import { blockStore } from "../../models/store";
  export let id;
</script>

<div>
  <input
    required
    id="renderInput"
    name="renderInput"
    bind:value={$blockStore[id].value}
  />
  <label for="renderInput">Render</label>
</div>

<style>
  div {
    display: flex;
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    height: 1.5rem;
    font-size: 0.9rem;
    padding: 0.6rem 0 0 0.4rem;
  }

  label {
    position: absolute;
    left: 0.5rem;
    top: 0.75rem;
    transform-origin: left top;
    transition: transform 100ms ease-in-out;
    /* transform: translateY(-50%); */
    /* z-index: 1; */
  }
  input:focus + label,
  input:valid + label {
    transform: translateY(-50%) scale(0.7);
    color: var(--secondary);
    /* left: 0.1rem; */
  }
</style>
