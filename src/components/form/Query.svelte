<script lang="ts">
  import { blockStore } from "../../models/store";
  export let id;

  let selectedQuery;
  let selectedType;
  let argument;
  // let comparisonType;
  // let modifier;
  // let parentIsMock = false;
  // $: if($blockStore[id].parentId.includes('mock')) parentIsMock = true;
  function updateVal() {
    console.log($blockStore[id].parentId.includes("mock"));
    $blockStore[id][
      "value"
    ] = `screen.${selectedQuery}${selectedType}('${argument}')`;
    // if(parentIsMock) $blockStore[id]["value"] += `${comparisonType} = ${modifier}`
  }

  const queries = [
    "getBy",
    "queryBy",
    "findBy",
    "getAllBy",
    "queryAllBy",
    "findAllBy",
  ];
  const types = ["Role", "Text"];
  const comparisons = [".innerHMTL", ".textContent"];
</script>

<div>
  <select
    required
    id="queryInput"
    name="queryInput"
    bind:value={selectedQuery}
    on:change={() => updateVal()}
  >
    <option>...</option>
    {#each queries as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <label for="queryInput">Query</label>
</div>
<div>
  <select
    required
    id="queryType"
    name="queryType"
    bind:value={selectedType}
    on:change={() => updateVal()}
  >
    <option>...</option>
    {#each types as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <label for="queryType">Type</label>
</div>
<div>
  <input
    required
    id="argumentInput"
    name="argumentInput"
    bind:value={argument}
  />
  <label for="argumentInput">Argument</label>
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
