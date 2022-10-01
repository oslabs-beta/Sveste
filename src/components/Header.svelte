<script>
  import FavoritesButton from "../components/FavoritesButton.svelte";
  import LoginButton from "../components/LoginButton.svelte";
  import HomeButton from "../components/HomeButton.svelte";
  import { isLoggedIn } from "../models/store";
</script>

<header>
  <h1>🦺 Sveste</h1>

  <menu>
    {#if location.href.includes("login")}
      <li><HomeButton /></li>
    {:else if $isLoggedIn}
      <li><a href="/#/home">Home</a></li>
      <li><FavoritesButton /></li>
    {:else}
      <li><LoginButton /></li>
    {/if}
  </menu>
</header>

<style>
  header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 5vw;
    background-color: var(--primary);
  }
  menu > li {
    list-style-type: none;
  }
</style>
