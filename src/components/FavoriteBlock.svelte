<script>
  export let fav;
  export let id;
  import Prism from "prismjs";
  import axios from "axios";
  import { userId } from "../models/store";
  import { favoritesStore } from "../models/favoritesStore";

  function handleChange(codeBlock) {
    const block = codeBlock;
    Prism.highlightElement(block);
  }
  async function handleDelete() {
    // console.log(id);
    // console.log($favoritesStore.indexOf(fav));
    try {
      console.log($favoritesStore, "before delete");
      const response = await axios.put("/favorites", {
        _id: $userId,
        favorite: $favoritesStore.indexOf(fav),
      });
      console.log(response.data, "after delete");

      favoritesStore.set([...response.data]);
    } catch (err) {
      console.log(err);
    }
  }
</script>

<pre>
    <code use:handleChange id="code" class="language-javascript">
      {fav}
    </code>
  </pre>
<button on:click|preventDefault={handleDelete}>Delete Favorite</button>

<style>
  @import "prismjs";
</style>
