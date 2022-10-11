<script>
  import { favoritesStore } from '../models/favoritesStore';
  import FavoriteBlock from '../components/FavoriteBlock.svelte';

  let index = 0;
</script>

{#key $favoritesStore}
  <div class="container">
    {#each $favoritesStore as fav}
      <FavoriteBlock {fav} id={index + 1} />
    {/each}
  </div>
{/key}

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
