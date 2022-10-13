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
    border-radius: 0.25rem;
    border: 1px solid var(--primary);
    color: var(--text-light);
    transition: all 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  button:hover {
    background-color: var(--text-light);
    color: var(--primary);
    cursor: pointer;
  }
</style>
