<script lang="ts">
  const src = "src/assets/login.png";
  function handleClick() {
    location.href = "/#/login";
  }
</script>

<button on:click={handleClick}><img {src} alt="loginicon" /> Login</button>

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
