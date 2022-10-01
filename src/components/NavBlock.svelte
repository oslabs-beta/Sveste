<script lang="ts">
  import NavMenu from "./NavMenu.svelte";
  import ExpandMore from "./icons/ExpandMore.svelte";
  export let blockType: "parent" | "child";
  // dummy data, use svelte:self with a tree of components later
  let children = [
    { blockType: "child" },
    { blockType: "child" },
    { blockType: "child" },
  ];
  let indent = 1.5;
</script>

<button>
  {#if (blockType = "parent")}
    <ExpandMore />
  {:else}
    <p>&ensp;</p>
  {/if}

  <p>{blockType}</p>
</button>
<div style="padding-left: {indent}rem;">
  {#each children as child}
    <button><p>{child.blockType}</p></button>
  {/each}
</div>

<style>
  button {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 1.5rem;
    width: 100%;
    font-size: 0.9rem;
    color: var(--text-mid);
    border: none;
    background-color: transparent;
  }
  div {
    display: flex;
    flex-direction: column;
  }
</style>
