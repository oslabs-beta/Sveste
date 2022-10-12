<script>
  import FavoritesButton from '../components/FavoritesButton.svelte';
  import LoginButton from '../components/LoginButton.svelte';
  import HomeButton from '../components/HomeButton.svelte';
  import { isLoggedIn } from '../models/store';
</script>

<header>
  <h1>🦺 Sveste</h1>

  <menu>
    {#if location.href.includes('login')}
      <li><HomeButton /></li>
    {:else if $isLoggedIn}
      <li><a href="/#/home"><HomeButton /></a></li>
      <li class="vl" />
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
    padding: 1vh 2vw;
    background-color: var(--primary);
    color: var(--text-light);
    box-shadow: 0 0 1px 1px var(--shadow);
    border: 1px solid var(--shadow);
  }
  menu {
    display: flex;
  }
  menu > li {
    list-style-type: none;
  }

  .vl {
    border-left: 1px solid var(--shadow);
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
</style>
