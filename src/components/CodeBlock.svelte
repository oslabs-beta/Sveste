<script>
  // import { onMount } from "svelte/types/runtime/internal/lifecycle";
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import { compiledTestStore, submitSuccessful } from "../compiledTestStore";
  import { favoritesStore } from "../models/favoritesStore";
  import axios from "axios";
  import { isLoggedIn, userId } from "../models/store";
  import Modal from "./form/loginModal.svelte";
  import LoginButton from "./LoginButton.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
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
    const user = $userId;
    progress = tweened(0, {
      duration: 3000,
      easing: cubicOut,
    });
    // favoritesStore.set([...$favoritesStore, $compiledTestStore]);
    // console.log(typeof JSO$compiledTestStore);
    try {
      let parsedBody = JSON.stringify($compiledTestStore);

      const response = await axios.post("/favorites", {
        _id: user,
        favorite: $compiledTestStore,
      });
      await progress.set(1);

      // return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  function toggleModal() {
    modalContent = LoginButton;
    showModal = !showModal;
  }
  // ///////////////////

  let progress = tweened(0, {
    duration: 3000,
    easing: cubicOut,
  });
</script>

<pre>
  <code id="code" class="language-javascript">
    {$compiledTestStore}
  </code>
</pre>
{#if $submitSuccessful}
  <progress value={$progress} />
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
