<script>
  import NavBlock from './NavBlock.svelte';
  import { testStore } from '../models/store';
</script>

<div>
  <NavBlock
    name={$testStore['type'] || 'root'}
    children={$testStore['children']}
    id={$testStore['id']}
  />
</div>

<style>
</style>
