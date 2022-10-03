<script lang="ts">
  import { blockStore } from "../../models/store";
  import { queries, roles } from "../../types/queryTypes";
  import { modifiers } from "../../types/modifierTypes";
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
</script>

<div {id}>
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
      {#each roles as value}
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
      <option>...</option>
      {#each modifiers as value}
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
