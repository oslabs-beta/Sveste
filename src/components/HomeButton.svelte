<script lang="ts">
  const src = "src/assets/house.png";
  function handleClick() {
    location.href = "/#/home";
  }
</script>

<button type="button" on:click={handleClick}
  ><img {src} alt="houseicon" /> Home</button
>

<style>
  button {
    text-decoration: none;
    color: white;
    width: 100px;
    flex-direction: row;
    border-radius: 2rem;
    border: 1px solid var(--primary);
    background-color: transparent;
    font-size: 1rem;
  }
  button:hover {
    background-color: white;
    color: var(--primary);
  }
</style>
