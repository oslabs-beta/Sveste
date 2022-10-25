<script lang="ts">
  import { blockStore } from '../../models/store';
  export let id;

  let selectedAssertion;
  let argument;
  let isNot;
  function updateVal() {
    $blockStore[id]['value'] = `${isNot}.${selectedAssertion}${
      argument ? `('${argument}')` : '()'
    }`;
  }

  const nots = ['not', ''];

  const assertions = ['toBe', 'toThrow', 'toEqual', 'toContain'];
</script>

<div>
  <select
    id="notInput"
    name="notInput"
    bind:value={isNot}
    on:change={() => updateVal()}
  >
    <option>...</option>
    {#each nots as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <label for="notInput">Not?</label>
</div>
<div>
  <select
    id="queryInput"
    name="queryInput"
    bind:value={selectedAssertion}
    on:change={() => updateVal()}
  >
    <option>...</option>
    {#each assertions as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <label for="queryInput">Query</label>
</div>
<div>
  <input
    name="valueInput"
    id="valueInput"
    bind:value={argument}
    on:change={() => updateVal()}
  />
  <label for="valueInput">Value</label>
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

  input {
    width: 100%;
    height: 1.5rem;
    font-size: 0.9rem;
    padding: 0.6rem 0 0 0.4rem;
  }

  input:focus + label,
  input:valid + label {
    transform: translateY(-50%) scale(0.7);
    color: var(--secondary);
    /* left: 0.1rem; */
  }
</style>
