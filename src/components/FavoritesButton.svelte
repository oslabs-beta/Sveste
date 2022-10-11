<script lang="ts">
  import axios from 'axios';
  import { push } from 'svelte-spa-router';
  import { favoritesStore } from '../models/favoritesStore';
  import { userId } from '../models/store';
  //hardcoded place holder for current user
  const src = 'src/assets/heart.png';
  // const user = "testid";
  async function handleFavoritesGet() {
    // try {
    //   const response = await axios.get('http://localhost:3000/api/favorites', {
    //     // params: { _id: user },
    //   });
    //   // const parsedBody = JSON.parse(response.data)
    //   console.log(response);
    //   favoritesStore.set([...response.data]);
    //   console.log($favoritesStore);
    //   // location.href = '/#/favorites';
    // } catch (err) {
    //   console.log(err);
    // }
    const params = '?' + `id=${$userId}`;
    const res = await fetch('/api/favorites' + params, {
      method: 'GET',
    });
    const data = await res.json();
    favoritesStore.set(data.favorites);
    return push('#/favorites');
  }
</script>

<button type="button" on:click={handleFavoritesGet}
  ><img {src} alt="hearticon" /> Favorites</button
>

<style>
  button {
    text-decoration: none;
    flex-direction: row;
    border-radius: 2rem;
    border: 1px solid var(--primary);
    background-color: transparent;
    color: white;
    font-size: 1rem;
  }
  button:hover {
    background-color: white;
    color: var(--primary);
  }
</style>
