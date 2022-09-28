<script lang="ts">
  import { blockStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  export let id;
  const events = ["click", "hover", "type"];
  let event;
  let text;
  let selected = false;
  function updateVal() {
    selected = true;
    $blockStore[id]["value"] = `${event}`;
    // if(parentIsMock) $blockStore[id]["value"] += `${comparisonType} = ${modifier}`
  }
  $: if (selected) handleTypeEvent();
  function handleTypeEvent() {
    console.log("the chosen one");
    const newBlock = new Block("query", id);
    blockStore.upsertBlock(newBlock);
  }
</script>

<p>Events</p>
<select bind:value={event} on:change={() => updateVal()}>
  <option>...</option>
  {#each events as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
{#if event === "type"}
  <input
    required
    type="text"
    placeholder="text"
    bind:value={text}
    on:change={() => updateVal()}
  />
{/if}
