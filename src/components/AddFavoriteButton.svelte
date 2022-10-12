<script lang="ts">
  import { userId } from '../models/store';
  import Star from './icons/StarOutline.svelte';
  import { compiledTestStore } from '../compiledTestStore';

  async function handleAddFavorite() {
    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: $userId, favorite: $compiledTestStore }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
</script>

<button on:click|preventDefault={handleAddFavorite} type="submit"
  ><Star /></button
>

<style>
  button {
    display: flex;
    width: fit-content;
    justify-self: end;
    align-self: center;
    color: var(--primary);
    background-color: transparent;
    border: none;
  }
  button:hover {
    background-color: var(--highlight);
    color: var(--text-light);
    cursor: pointer;
  }
</style>
