<script>
  import { blockStore } from "../../models/store";
  export let id;
  export let inputType;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const labelText = capitalizeFirstLetter(inputType);
  const idText = inputType + "Input";
</script>

<input required id={idText} name={idText} bind:value={$blockStore[id].value} />
<label for={idText}>{labelText}</label>

<!-- <style>
</style> -->
