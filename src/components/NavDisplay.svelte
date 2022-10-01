<script lang="ts">
  import NavBar from "./NavMenu.svelte";
  import NavMenu from "./NavMenu.svelte";
  export let screenWidth: number;
</script>

<div>
  {#if screenWidth <= 920}
    <NavMenu />
  {:else}
    <NavBar />
  {/if}
</div>

<style>
  div {
    grid-area: nav;
    z-index: -1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    padding: 1rem 0.5rem;
    background-color: var(--primary-mid);
    box-shadow: 0 0 1px 1px var(--shadow);
  }
</style>
