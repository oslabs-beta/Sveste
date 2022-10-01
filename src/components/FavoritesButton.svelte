<script lang="ts">
  import axios from "axios";
  import { favoritesStore } from "../models/favoritesStore";
  import { userId } from "../models/store";
  //hardcoded place holder for current user
  const src = "src/assets/heart.png";
  const user = $userId;
  async function handleFavoritesGet() {
    try {
      const response = await axios.get("/favorites", { params: { _id: user } });
      // const parsedBody = JSON.parse(response.data)
      favoritesStore.set([...response.data]);
      console.log($favoritesStore);
      location.href = "/#/favorites";
    } catch (err) {
      console.log(err);
    }
  }
</script>

<button on:click={handleFavoritesGet}
  ><img {src} alt="hearticon" />Favorites</button
>

<style>
  button {
    text-decoration: none;
    color: black;
    width: 90px;
  }
</style>
