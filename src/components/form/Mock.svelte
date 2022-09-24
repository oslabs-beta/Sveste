<script>
  import { blockStore } from "../../models/store";
  export let id;
  let options = ["beforeEach", "beforeAll"];
  let selected;
  $: $blockStore[id]["value"] = selected;
</script>

<p>Mock:</p>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>
