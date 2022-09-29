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
<button on:click|preventDefault={handleDelete}>-</button>

<style>
  @import "prismjs";
  pre {
    margin-left: 2em;
    margin-top: 2em;
    border-radius: 10px;
    border: 2px solid var(--svestedarkteal);
  }
  button {
    display: flex;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1.4rem;
    align-items: center;
    justify-content: center;
    color: var(--highlight);
    border: none;
    background: transparent;
  }
  button:hover {
    background-color: var(--highlight);
    color: white;
  }
</style>
