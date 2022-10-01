<script lang="ts">
  import ExpandMore from "./icons/ExpandMore.svelte";
  import ExpandLess from "./icons/ExpandLess.svelte";
  import AddButton from "./form/AddButton.svelte";
  // import { children } from 'svelte/internal';

  let isOpen = false;
  const toggleMenu = () => {
    console.log("clicked");
    console.log(blockType);
    isOpen = !isOpen;
  };

  // dummy data, use svelte:self with a tree of components later
  // export let blockType: "parent" | "child";
  export let blockType;
  export let name;
  export let children = [];
  // let children = [
  //   { blockType: "child" },
  //   { blockType: "child" },
  //   { blockType: "child" },
  // ];
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

  <!-- <p>{blockType}</p> -->
  {name}
</button>

<div style="padding-left: {indent}rem;">
  {#if isOpen}
    {#each children as child}
      {#if child.children}
        {#if child.type === "describe" || child.type === "root" || child.type === "test" || child.type === "mock"}
          <svelte:self {...child} name={child.type} blockType={"parent"} />
        {:else}
          <svelte:self {...child} name={child.type} blockType={"child"} />
        {/if}
      {/if}
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

  button:hover {
    /* color: var(--text); */
    text-shadow: 0 0 1px var(--shadow);
  }
  div {
    display: flex;
    flex-direction: column;
  }
</style>
