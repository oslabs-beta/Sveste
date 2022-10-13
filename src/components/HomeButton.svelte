<script lang="ts">
  function handleClick() {
    location.href = '/#/home';
  }
</script>

<button type="button" on:click={handleClick}> Home</button>

<style>
  button {
    text-decoration: none;

    flex-direction: row;
    border-radius: 0.25rem;
    border: 1px solid var(--primary);
    background-color: transparent;
    font-size: 1rem;
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
