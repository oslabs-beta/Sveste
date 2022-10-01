<script lang="ts">
  import ExpandMore from "./icons/ExpandMore.svelte";
</script>

<div>
  <ExpandMore />
  <p>Describe...</p>
</div>

<style>
  div {
    display: flex;
    width: 100%;
    height: 1.2rem;
    justify-content: start;
    align-items: center;
    background-color: transparent;
    color: var(--text);
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
</style>
