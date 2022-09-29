<script lang="ts">
  function handleClick() {
    location.href = "/#/login";
  }
</script>

<button on:click={handleClick}>Login</button>

<style>
  button {
    font-size: 1rem;
    color: black;
    background-color: transparent;
    border: none;
  }
</style>
