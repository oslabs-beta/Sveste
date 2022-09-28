<script lang="ts">
  import { blockStore } from "../../models/store";
  export let id;

  let selectedQuery;
  let selectedType;
  let argument;
  let attribute;
  let val;
  function updateVal() {
    $blockStore[id][
      "value"
    ] = `screen.${selectedQuery}${selectedType}('${argument}').${attribute} = "${val}"`;
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
  const attributes = ["innerHTML", "value"];
</script>

<div>
  <div>
    <select
      required
      id="queryInput"
      name="queryInput"
      bind:value={selectedQuery}
      on:change={() => updateVal()}
    >
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
      id="typeInput"
      name="typeInput"
      bind:value={selectedType}
      on:change={() => updateVal()}
    >
      {#each types as value}
        <option {value}>
          {value}
        </option>
      {/each}
    </select>
    <label for="typeInput">Type</label>
  </div>
  <div>
    <input
      required
      id="argumentInput"
      name="argumentInput"
      bind:value={argument}
      on:change={() => updateVal()}
    />
    <label for="argumentInput">Argument</label>
  </div>
  <div>
    <select
      required
      name="modifierInput"
      id="modifierInput"
      bind:value={attribute}
      on:change={() => updateVal()}
    >
      {#each attributes as value}
        <option {value}>
          {value}
        </option>
      {/each}
    </select>
    <label for="modifierInput">Modifier</label>
  </div>
  <div>
    <input
      required
      id="valueInput"
      name="valueInput"
      bind:value={val}
      on:change={() => updateVal()}
    />
    <label for="valueInput">Value</label>
  </div>
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
