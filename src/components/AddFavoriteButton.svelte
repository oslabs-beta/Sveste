<script lang="ts">
  import { isLoggedIn, userId } from "../models/store";
  import Modal from "./form/loginModal.svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import LoginButton from "./LoginButton.svelte";
  import { compiledTestStore, submitSuccessful } from "../compiledTestStore";
  import axios from "axios";
  let showModal = false;
  let modalContent;
  let progress = tweened(0, {
    duration: 3000,
    easing: cubicOut,
  });

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
</script>

<!-- {#if $submitSuccessful}
  <progress value={$progress} />
{/if} -->
<button on:click|preventDefault={handleAddFavorite} type="submit"
  >Add To Favorites</button
>

{#if showModal}
  <Modal on:click={toggleModal} {modalContent} />
{/if}

<style>
  button {
    display: flex;
    width: fit-content;
    /* margin: 0 auto; */
    padding: 0.5rem;
    border-radius: 1rem;
    color: white;
    background-color: var(--primary);
    border: none;
  }
  button:hover {
    background-color: var(--highlight);
    color: white;
    cursor: pointer;
  }
</style>
