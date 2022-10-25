<script lang="ts">
  import Block from './form/Block.svelte';
  import { testStore } from '../models/store';
  import { POST } from '../controllers/submitForm';
</script>

<div>
  <form on:submit|preventDefault={() => POST('/tests', $testStore)}>
    <button type="submit">Submit</button>
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
    flex-direction: column;
    padding-top: 2rem;
  }
  button {
    position: absolute;
    right: -1rem;
    top: 0.5rem;
    width: fit-content;
    border: none;
    border-radius: 2rem;
    padding: 0.5rem 1rem;
    color: white;
    background-color: var(--svestedarkteal);
  }
</style>
