<script>
  import FavoritesButton from "../components/FavoritesButton.svelte";
  import LoginButton from "../components/LoginButton.svelte";
  import { isLoggedIn } from "../models/store";
</script>

<header>
  <h1>Sveste</h1>
  <menu>
    {#if $isLoggedIn}
      <li><FavoritesButton /></li>
      <li><a href="/#/home">Home</a></li>
    {:else}
      <li><LoginButton /></li>
    {/if}
  </menu>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style-type: none;
  }
</style>
