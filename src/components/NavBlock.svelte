<script lang="ts">
  import ExpandMore from "./icons/ExpandMore.svelte";
  import ExpandLess from "./icons/ExpandLess.svelte";

  let isOpen = false;
  const toggleMenu = () => {
    console.log("clicked");
    isOpen = !isOpen;
  };

  // dummy data, use svelte:self with a tree of components later
  export let blockType: "parent" | "child";
  let children = [
    { blockType: "child" },
    { blockType: "child" },
    { blockType: "child" },
  ];
  let indent = 1.5;
</script>

<button type="button" on:click={toggleMenu}>
  {#if (blockType = "parent")}
    {#if isOpen}
      <ExpandLess />
    {:else}
      <ExpandMore />
    {/if}
  {:else}
    <p>&ensp;</p>
  {/if}

  <p>{blockType}</p>
</button>

<div style="padding-left: {indent}rem;">
  {#if isOpen}
    {#each children as child}
      <button><p>{child.blockType}</p></button>
    {/each}
  {/if}
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
