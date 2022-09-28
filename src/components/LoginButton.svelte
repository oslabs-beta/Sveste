<script lang="ts">
  function handleClick() {
    location.href = "/#/login";
  }
</script>

<button on:click={handleClick}>Login</button>

<style>
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
