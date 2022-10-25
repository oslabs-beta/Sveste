<!-- Currently not being used -->
<script lang="ts">
  import { blockStore } from '../../models/store';
  export let id;

  let selectedQuery;
  let selectedType;
  let argument;
  // $: if($blockStore[id].parentId.includes('mock')) parentIsMock = true;
  function updateVal() {
    console.log($blockStore[id].parentId.includes('mock'));
    $blockStore[id][
      'value'
    ] = `screen.${selectedQuery}${selectedType}('${argument}')`;
    // if(parentIsMock) $blockStore[id]["value"] += `${comparisonType} = ${modifier}`
  }

  const queries = [
    'getBy',
    'queryBy',
    'findBy',
    'getAllBy',
    'queryAllBy',
    'findAllBy',
  ];
  const types = ['Role', 'Text'];
  const comparisons = ['.innerHMTL', '.textContent'];
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
