<script lang="ts">
  export let screenWidth: number;
</script>

<nav>
  {#if screenWidth <= 920}
    <p>Collapsed Nav</p>
  {:else}
    <p>Nav</p>
  {/if}
</nav>

<style>
  nav {
    grid-area: nav;
    display: grid;
    border: 1px solid black;
  }
</style>
