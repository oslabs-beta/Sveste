<script lang="ts">
</script>

<div class="container">
  <slot />
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: 100vw;
    height: 100vh;
  }
</style>
