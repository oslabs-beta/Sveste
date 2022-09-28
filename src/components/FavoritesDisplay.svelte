<script>
  import { favoritesStore } from "../models/favoritesStore";
  import FavoriteBlock from "../components/FavoriteBlock.svelte";
</script>

<div class="container">
  <!-- {#each $favoritesStore as fav}
    <FavoriteBlock {fav} />
  {/each} -->
  <p>image here</p>
  <p>and image here</p>
  <p>and image here</p>
</div>

<style>
  .container {
    display: grid;
  }
</style>
