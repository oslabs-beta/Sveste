<script lang="ts">
  import { blockStore } from "../../models/store";
  export let id;

  let selectedQuery;
  let selectedType;
  let argument;
  function updateVal() {
    $blockStore[id][
      "value"
    ] = `screen.${selectedQuery}.${selectedType}('${argument}')`;
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
</script>

<p>Query Screen:</p>
<select bind:value={selectedQuery} on:change={() => updateVal()}>
  {#each queries as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<select bind:value={selectedType} on:change={() => updateVal()}>
  {#each types as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<label for={id}>Argument: </label>
<input
  name={id}
  type="text"
  placeholder="ex. button"
  bind:value={argument}
  on:change={() => updateVal()}
/>
