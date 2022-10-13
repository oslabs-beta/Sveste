<script lang="ts">
  import { blockStore } from '../../models/store';
  import { actionTypes } from '../../types/actionTypes';
  import { queries, roles } from '../../types/queryTypes';
  export let id: Number;
  let action: String;
  let selectedQuery: String;
  let selectedType: String;
  let argument: String;
  let typeInput: String;
  /*
   * Inserts an action code line into the Codedisplay, updates exported values based on user input
   */
  function updateVal() {
    if (action === 'type') console.log('im typing');
    $blockStore[id]['value'] = `const user = userEvent.setup();
        await user.${action}(screen.${selectedQuery}${selectedType}('${argument}')${
      action === 'type' ? `,'${typeInput}')` : ')'
    };\n        `;
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
  {#if action === 'type'}
    <div>
      <input
        required
        name="typeInput"
        bind:value={typeInput}
        on:change={() => updateVal()}
      />
      <label for="typeInput">type input</label>
    </div>
  {/if}
</div>
