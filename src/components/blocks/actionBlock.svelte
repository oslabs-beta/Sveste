<script lang="ts">
  import { blockStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import { actionTypes } from "../../types/actionTypes";
  import { queries, roles } from "../../types/queryTypes";
  export let id;
  let action;
  let selectedQuery;
  let selectedType;
  let argument;
  let selected = false;
  function updateVal() {
    // if (!selected) selected = true;
    $blockStore[id]["value"] = `  const user = userEvent.setup();
      await user.${action}(screen.${selectedQuery}${selectedType}('${argument}');`;
  }
  $: if (selected) handleTypeEvent();
  function handleTypeEvent() {
    const newBlock = new Block("actionBlock", id);
    blockStore.upsertBlock(newBlock);
  }
</script>

<div {id}>
  <div>
    <select
      required
      id="eventType"
      name="eventType"
      bind:value={action}
      on:change={() => updateVal()}
    >
      <option>...</option>
      {#each actionTypes as value}
        <option {value}>
          {value}
        </option>
      {/each}
    </select>
    <label for="eventType">Event Type</label>
  </div>

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
      {#each roles as value}
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
      on:change={() => updateVal()}
    />
    <label for="argumentInput">Argument</label>
  </div>
</div>
