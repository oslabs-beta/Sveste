<script lang="ts">
  import { blockStore } from '../../models/store';
  import { queries, roles } from '../../types/queryTypes';
  import { matchers } from '../../types/matcherTypes';
  export let id: Number;
  let selectedQuery: String;
  let selectedType: String;
  let argument: String;
  let isNot: String;
  let selectedMatcher: String;
  let matcherVal: String;
  let matcherStatement;
  /*
   * Inserts an execution code line into the Codedisplay, updates exported values based on user input
   */
  function updateVal() {
    $blockStore[id][
      'value'
    ] = `        expect(() => screen.${selectedQuery}${selectedType}('${argument}'))${
      isNot === 'not'
        ? `.${isNot}.${selectedMatcher}${matcherVal ? `(${matcherVal})` : '()'}`
        : `.${selectedMatcher}${matcherVal ? `(${matcherVal})` : '();'}`
    }\n`;
  }

  //   const types = ['Role', 'Text'];
  const nots = ['not', ''];
</script>

<p>expect</p>
<div {id}>
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
<div {id}>
  <select
    id="notInput"
    name="notInput"
    bind:value={isNot}
    on:change={() => updateVal()}
  >
    <option>...</option>
    {#each nots as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <label for="notInput">Not?</label>
</div>
<div>
  <select
    id="queryInput"
    name="queryInput"
    bind:value={selectedMatcher}
    on:change={() => updateVal()}
  >
    <option>...</option>
    {#each matchers as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <label for="queryInput">Matcher</label>
</div>
<div>
  <input
    name="valueInput"
    id="valueInput"
    bind:value={matcherVal}
    on:change={() => updateVal()}
  />
  <label for="valueInput">Value</label>
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
    color: var(--text-mid);
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
    color: var(--text-mid);
    /* left: 0.1rem; */
  }
</style>
