<script lang="ts">
  import ExpandMore from './icons/ExpandMore.svelte';
  import ExpandLess from './icons/ExpandLess.svelte';
  import AddButton from './form/AddButton.svelte';
  import type { Block } from '../controllers/blockClass';
  import {} from 'os';

  let isOpen = true;
  const toggleMenu = () => {
    isOpen = !isOpen;
  };

  /*
   *
   */
  const scrollToAnchor = () => {
    const target = document.getElementById(id);
    console.log(target);
    if (target) {
      target.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  };

  export let name: string;
  export let children: Record<string, Block>[] = [];
  export let id: string;
  let child;

  let indent = 1.5;
</script>

<button
  type="button"
  on:click|preventDefault={scrollToAnchor}
  on:click|preventDefault={toggleMenu}
>
  {#if /describe|root/i.test(name)}
    {#if children.length}
      {#if isOpen}
        <ExpandLess />
      {:else}
        <ExpandMore />
      {/if}
    {/if}
  {/if}
  {name.replace(/([a-z]*)(Statement|Block|)/g, '$1').toLowerCase()}
</button>

<div style="padding-left: {indent}rem;">
  {#if isOpen}
    {#each children as child}
      {#if typeof child.type === 'string' && /statement/i.test(child.type)}
        <svelte:self {...child} name={child.type} blockType={'parent'} />
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
    font-size: 1rem;
    color: var(--text-mid);
    border: none;
    background-color: transparent;
  }

  button:hover {
    color: var(--text);
    text-shadow: 0 0 1px var(--shadow);
  }
  div {
    display: flex;
    flex-direction: column;
  }
</style>
