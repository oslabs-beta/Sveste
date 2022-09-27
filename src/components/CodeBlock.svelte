<script>
  // import { onMount } from "svelte/types/runtime/internal/lifecycle";
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import { compiledTestStore } from "../compiledTestStore";
  import { favoritesStore } from "../models/favoritesStore";
  ///////----- Functionality to reload Prism on Change!!!!!!!!!----------///
  //when mounted on on store change prism reruns on only the element <code>
  let loaded = false;
  onMount(() => (loaded = true));
  $: html = Prism.highlight(
    $compiledTestStore,
    Prism.languages.javascript,
    "javascript"
  );

  $: if (loaded && $compiledTestStore) handleChange();

  function handleChange() {
    const block = document.getElementById("code");
    Prism.highlightElement(block);
  }
  //////-----------------------------------//////////
  function handleAddFavorite() {
    favoritesStore.set([...$favoritesStore, $compiledTestStore]);
    console.log($favoritesStore);
  }
</script>

<pre>
  <code id="code" class="language-javascript">
    {$compiledTestStore}
  </code>
</pre>
<button on:click|preventDefault={handleAddFavorite} type="submit"
  >Add To Favorites</button
>

<style>
  @import "prismjs";
</style>
