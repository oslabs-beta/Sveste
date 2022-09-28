<script lang="ts">
  import axios from "axios";
  import { favoritesStore } from "../models/favoritesStore";
  //hardcoded place holder for current user
  const user = "admin@test.com";
  async function handleFavoritesGet() {
    try {
      const response = await axios.get("/favorites", { params: { _id: user } });

      favoritesStore.set([...$favoritesStore, ...response.data]);
      console.log($favoritesStore);
    } catch (err) {
      console.log(err);
    }
  }
</script>

<a on:click={handleFavoritesGet} href="/#/favorites">Favorites</a>
