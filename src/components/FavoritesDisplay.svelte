<script>
  import { favoritesStore } from "../models/favoritesStore";
  import FavoriteBlock from "../components/FavoriteBlock.svelte";
  import Prism from "prismjs";
</script>

<div class="container">
  {#each $favoritesStore as fav}
    <FavoriteBlock {fav} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
