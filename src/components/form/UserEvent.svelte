<script lang="ts">
  import { blockStore } from '../../models/store';
  import { Block } from '../../controllers/blockClass';
  export let id;
  const events = ['click', 'hover', 'type'];
  let event;
  let text;
  let selected = false;
  function updateVal() {
    selected = true;
    $blockStore[id]['value'] = `${event}`;
  }
  $: if (selected) handleTypeEvent();
  function handleTypeEvent() {
    // console.log('the chosen one');
    const newBlock = new Block('query', id);
    blockStore.upsertBlock(newBlock);
  }
</script>

<div>
  <select
    required
    id="eventType"
    name="eventType"
    bind:value={event}
    on:change={() => updateVal()}
  >
    <option>...</option>
    {#each events as value}
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
