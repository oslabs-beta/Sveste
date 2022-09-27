<script lang="ts">
  import { blockStore } from "../../models/store";
  export let id;

  let selectedQuery;
  let argument;
  function updateVal() {
    $blockStore[id]["value"] = `screen.${selectedQuery}('${argument}')`;
  }

  const queries = ["toContain", "toBe", "toBeTruthy"];
</script>

<p>Expect:</p>
<p>expect...</p>
<!-- <select bind:value={selectedQuery} on:change={() => updateVal()}>
  {#each queries as value}
    <option {value}>
      {value}
    </option>
  {/each}

</select>
 
<label for={id}>Argument: </label>
<input
  name={id}
  type="text"
  placeholder="ex. 'Hello World'"
  bind:value={argument}
  on:change={() => updateVal()} -->
<!-- /> -->
