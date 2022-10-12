<script lang="ts">
  function handleClick() {
    location.href = '/#/login';
  }
</script>

<button on:click={handleClick}>Login</button>

<style>
  button {
    font-size: 1rem;
    color: white;
    background-color: transparent;
    border-radius: 2rem;
    border: 1px solid var(--primary);
    width: 100px;
  }
  button:hover {
    background-color: white;
    color: var(--primary);
  }
</style>
