<script lang="ts">
  import { testStore } from "../../models/store";

  function handleClick(e) {
    let parent = e.target.parentElement;
    console.log(parent);
    testStore.deleteBlock(parent.block);
  }
</script>

<button on:click|preventDefault={(e) => handleClick(e)}>-</button>

<!-- 
function deleteGroup(group) {
  testStore.deleteBlock(group);
}

<button on:click|preventDefault={() => deleteGroup(group)}
  >Delete Group</button
> -->
<style>
  button {
    position: relative;
  }
</style>
