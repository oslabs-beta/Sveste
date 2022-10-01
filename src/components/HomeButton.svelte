<script lang="ts">
  const src = "src/assets/house.png";
  function handleClick() {
    location.href = "/#/home";
  }
</script>

<button on:click={handleClick}><img {src} alt="houseicon" />Home</button>

<style>
  button {
    text-decoration: none;
    color: black;
    width: 90px;
  }
</style>
