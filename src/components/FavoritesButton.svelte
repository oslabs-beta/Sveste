<script lang="ts">
  import axios from "axios";
  import { favoritesStore } from "../models/favoritesStore";
  import { userId } from "../models/store";
  //hardcoded place holder for current user
  const user = $userId;
  async function handleFavoritesGet() {
    try {
      const response = await axios.get("/favorites", { params: { _id: user } });
      // const parsedBody = JSON.parse(response.data)
      favoritesStore.set([...response.data]);
      console.log($favoritesStore);
    } catch (err) {
      console.log(err);
    }
  }
</script>

<a on:click={handleFavoritesGet} href="/#/favorites">Favorites</a>

<style>
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
