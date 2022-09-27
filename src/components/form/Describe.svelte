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
    display: flex;
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    height: 1.2rem;
    font-size: 1rem;
  }

  label {
    position: absolute;
    left: 0.25rem;
    top: 0.1rem;
    /* transform: translateY(-50%); */
    /* z-index: 1; */
  }
  /* input:focus + label,
  textarea:focus + label {
    transform: translate(0, -150%);
  } */
</style>
