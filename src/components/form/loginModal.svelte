<script>
  // export let modalContent;
  export let modalContent;
</script>

<div on:click|self class="modal">
  <div class="content">
    <h2>You Must Log In to Add Favorite</h2>
    <svelte:component this={modalContent} on:click />
    <button on:click>close</button>
  </div>
</div>

<style>
  .modal {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background-color: white;
    width: 20em;
    height: 20em;
  }
</style>
