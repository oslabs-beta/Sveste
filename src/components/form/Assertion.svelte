<script lang="ts">
  import { blockStore } from "../../models/store";
  export let id;

  let selectedAssertion;
  let argument;
  let isNot;
  function updateVal() {
    $blockStore[id]["value"] = `${isNot}.${selectedAssertion}('${argument}')`;
  }

  const nots = [".not", ""];

  const assertions = ["toBe", "toThrow", "toEqual", "toContain"];
</script>

<p>Query Screen:</p>
<select bind:value={selectedAssertion} on:change={() => updateVal()}>
  {#each assertions as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<select bind:value={isNot} on:change={() => updateVal()}>
  {#each nots as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<label for={id}>Assertion: </label>
<input
  name={id}
  type="text"
  placeholder="ex. button"
  bind:value={argument}
  on:change={() => updateVal()}
/>
