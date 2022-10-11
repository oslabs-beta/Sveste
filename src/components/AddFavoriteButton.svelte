<script lang="ts">
  import { isLoggedIn, userId } from '../models/store';
  import Modal from './form/loginModal.svelte';
  import Star from './icons/StarOutline.svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import LoginButton from './LoginButton.svelte';
  import { compiledTestStore, submitSuccessful } from '../compiledTestStore';
  // import axios from 'axios';
  // let showModal = false;
  // let modalContent;
  // let progress = tweened(0, {
  //   duration: 3000,
  //   easing: cubicOut,
  // });
  async function handleAddFavorite() {
    // console.log($userId);
    // if (!$isLoggedIn) return toggleModal();
    // const user = 'testid';
    // progress = tweened(0, {
    //   duration: 3000,
    //   easing: cubicOut,
    // });
    // favoritesStore.set([...$favoritesStore, $compiledTestStore]);
    // console.log(typeof JSO$compiledTestStore);
    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: $userId, favorite: $compiledTestStore }),
      });
      const data = await response.json();
      return data;

      // return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  // function toggleModal() {
  //   modalContent = LoginButton;
  //   showModal = !showModal;
  // }
</script>

<!-- {#if $submitSuccessful}
  <progress value={$progress} />
{/if} -->
<button on:click|preventDefault={handleAddFavorite} type="submit"
  ><Star /></button
>

<!-- {#if showModal}
  <Modal on:click={toggleModal} {modalContent} />
{/if} -->
<style>
  button {
    display: flex;
    width: fit-content;
    justify-self: end;
    align-self: center;
    color: var(--primary);
    background-color: transparent;
    border: none;
  }
  button:hover {
    background-color: var(--highlight);
    color: var(--text-light);
    cursor: pointer;
  }
</style>
