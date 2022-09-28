<script lang="ts">
  import { blockStore } from "../../models/store";
  export let id;

  let selectedAssertion;
  let argument;
  let isNot;
  function updateVal() {
    $blockStore[id]["value"] = `${isNot}.${selectedAssertion}${
      argument ? `('${argument}')` : "()"
    }`;
  }

  const nots = [".not", ".to"];

  const assertions = ["toBe", "toThrow", "toEqual", "toContain"];
</script>

<p>Comparison Method:</p>

<select bind:value={isNot} on:change={() => updateVal()}>
  <option>...</option>
  {#each nots as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<select bind:value={selectedAssertion} on:change={() => updateVal()}>
  <option>...</option>
  {#each assertions as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<label for={id}>Assertion</label>
<input
  name={id}
  type="text"
  placeholder="ex. button"
  bind:value={argument}
  on:change={() => updateVal()}
/>
