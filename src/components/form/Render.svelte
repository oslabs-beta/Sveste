<!-- Currently not being used -->
<script>
  import { blockStore } from '../../models/store';
  export let id;
</script>

<div>
  <input
    required
    id="renderInput"
    name="renderInput"
    bind:value={$blockStore[id].value}
  />
  <label for="renderInput">Render</label>
</div>
