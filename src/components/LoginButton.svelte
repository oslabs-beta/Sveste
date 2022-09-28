<script lang="ts">
  function handleClick() {
    console.log("use router to send to login page");
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
