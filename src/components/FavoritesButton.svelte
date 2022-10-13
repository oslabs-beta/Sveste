<script lang="ts">
  import { push } from 'svelte-spa-router';
  import { favoritesStore } from '../models/favoritesStore';
  import { userId } from '../models/store';

  /*
   * Upon clicking Favorites button, redirects to favorites page. Initiates GET request to server to display user's saved codes tests
   */
  async function handleFavoritesGet() {
    const params = '?' + `id=${$userId}`;
    const res = await fetch('/api/favorites' + params, {
      method: 'GET',
    });
    const data = await res.json();
    favoritesStore.set(data.favorites);
    return push('#/favorites');
  }
</script>

<button type="button" on:click={handleFavoritesGet}>Favorites</button>

<style>
  button {
    text-decoration: none;
    flex-direction: row;
    border-radius: 0.25rem;
    border: 1px solid var(--primary);
    background-color: transparent;
    color: white;
    font-size: 1rem;
    color: var(--text-light);
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  button:hover {
    background-color: var(--text-light);
    color: var(--primary);
    cursor: pointer;
  }
</style>
