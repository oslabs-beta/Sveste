<script lang="ts">
  import { blockStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import { actionTypes } from "../../types/actionTypes";
  export let id;
  let event;
  let text;
  let selected = false;
  function updateVal() {
    selected = true;
    $blockStore[id]["value"] = `${event}`;
  }
  $: if (selected) handleTypeEvent();
  function handleTypeEvent() {
    const newBlock = new Block("query", id);
    blockStore.upsertBlock(newBlock);
  }
</script>

<div {id}>
  <select
    required
    id="eventType"
    name="eventType"
    bind:value={event}
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
<!-- {#if event === 'type'} -->
<div>
  <input
    required
    id="eventInput"
    name="eventInput"
    bind:value={text}
    on:change={() => updateVal()}
  />
  <label for="eventInput">Event Input</label>
</div>

<!-- {/if} -->
