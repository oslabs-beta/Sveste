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
  required
  name={id}
  type="text"
  placeholder="ex. button"
  bind:value={argument}
  on:change={() => updateVal()}
/>
<!-- {#if parentIsMock}
<select bind:value={comparisonType} on:change={() => updateVal()}>
  {#each comparisons as value}
    <option {value}>
      {value}
    </option>
  {/each} -->
<!-- </select> -->
<!-- <label for={id}>value: </label>
<input
  name={id}
  type="text"
  placeholder="Test"
  bind:value={modifier}
  on:change={() => updateVal()}
/>
{/if} -->
