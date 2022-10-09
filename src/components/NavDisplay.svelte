<script lang="ts">
  import NavMenu from "./NavMenu.svelte";
</script>

<div>
  <NavMenu />
</div>

<style>
  div {
    grid-area: nav;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    padding: 2vh 1vw 2vh 2vw;
    background-color: var(--primary-mid);
    border-right: 1px solid var(--shadow);
    border-bottom: 1px solid var(--shadow);
    box-shadow: 0 0 1px 1px var(--shadow);
  }
</style>
