<script>
  import FavoritesButton from "../components/FavoritesButton.svelte";
  import LoginButton from "../components/LoginButton.svelte";
  import { isLoggedIn } from "../models/store";
</script>

<header>
  <h1>🦺 Sveste |</h1>
  {#if !location.href.includes("login")}
    <menu>
      {#if $isLoggedIn}
        <li><a href="/#/home">Home</a></li>
        <li><FavoritesButton /></li>
      {:else}
        <li><LoginButton /></li>
      {/if}
    </menu>
  {/if}
</header>

<style>
  header {
    display: flex;
    justify-content: left;
    font-family: "Roboto", sans-serif;
    width: 100%;
    background: var(--svestedarkteal);
    border-bottom: 3px solid var(--svelte);
  }
  h1 {
    margin-left: 5rem;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
  menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 10rem;
  }
</style>
