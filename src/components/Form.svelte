<script lang="ts">
  import Block from './form/Block.svelte';
  import { testStore } from '../models/store';
  import { POST } from '../controllers/submitForm';
</script>

<div>
  <form on:submit|preventDefault={() => POST('/tests', $testStore)}>
    <!-- <button type="submit">Submit</button> -->
    <Block
      id={$testStore['id']}
      type={$testStore['type']}
      children={$testStore['children']}
    />
  </form>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    padding-top: 2rem;
  }
</style>
