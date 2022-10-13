<script lang="ts">
  import { userId } from '../models/store';
  import Star from './icons/StarOutline.svelte';
  import FilledStar from './icons/StarFilled.svelte';
  import { compiledTestStore } from '../compiledTestStore';
  let clicked = false;
  /*
   * Upon clicking favorites star, sends POST request to database to store all text in CodeDisplay to user database
   */
  async function handleAddFavorite() {
    clicked = !clicked;
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

<button on:click|preventDefault={handleAddFavorite} type="submit">
  {#if !clicked}
    <Star />
  {:else}
    <FilledStar />
  {/if}
</button>

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
    color: var(--highlight);
    cursor: pointer;
  }
</style>
