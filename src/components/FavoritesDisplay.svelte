<script>
  import { favoritesStore } from "../models/favoritesStore";
  import FavoriteBlock from "../components/FavoriteBlock.svelte";
  import Prism from "prismjs";
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
    display: grid;
  }
</style>
