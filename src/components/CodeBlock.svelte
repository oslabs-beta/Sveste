<script>
  // import { onMount } from "svelte/types/runtime/internal/lifecycle";
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import { compiledTestStore, submitSuccessful } from "../compiledTestStore";
  import { favoritesStore } from "../models/favoritesStore";
  import axios from "axios";
  import { isLoggedIn } from "../models/store";
  import Modal from "./form/loginModal.svelte";
  import Login from "./Login.svelte";
  ///////----- Functionality to reload Prism on Change!!!!!!!!!----------///
  //when mounted on on store change prism reruns on only the element <code>
  let loaded = false;
  let showModal = false;
  let modalContent;
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
  async function handleAddFavorite() {
    if (!$isLoggedIn) return toggleModal();
    const user = "admin@test.com";
    // favoritesStore.set([...$favoritesStore, $compiledTestStore]);
    // console.log(typeof JSO$compiledTestStore);
    try {
      let parsedBody = JSON.stringify($compiledTestStore);

      const response = await axios.post("/favorites", {
        _id: user,
        favorite: $compiledTestStore,
      });
      // if(response)

      // return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  function toggleModal() {
    modalContent = Login;
    showModal = !showModal;
  }
</script>

<pre>
  <code id="code" class="language-javascript">
    {$compiledTestStore}
  </code>
</pre>
<button on:click|preventDefault={toggleModal}>Test Modal</button>
{#if $submitSuccessful}
  <button on:click|preventDefault={handleAddFavorite} type="submit"
    >Add To Favorites</button
  >
{/if}
{#if showModal}
  <Modal on:click={toggleModal} {modalContent} />
{/if}

<style>
  @import "prismjs";

  pre {
    border-radius: 10px;
    border: 2px solid var(--svestedarkteal);
  }
</style>
