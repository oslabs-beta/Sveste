<script>
  import { formHeight } from '../../models/store';
  import AddButton from './AddButton.svelte';
  import DeleteButton from './DeleteButton.svelte';
  import { blockRef } from '../../controllers/blockTypes';
  import AddButtonMenu from './AddButtonMenu.svelte';
  export let id = '',
    type,
    children = [],
    indent = 0;
  let marginLeft = 0;
  $: height = /statement/i.test(type) ? `min-height: ${$formHeight}px` : '';
  function getComponent() {
    for (let ref of blockRef) {
      if (ref.type === type) return ref.component;
    }
  }

  const blockIncludeBtns = {
    null: 1,
    root: 1,
    describeStatement: 1,
    testStatement: 1,
  };
</script>

<div class="blockWrapper" style={height}>
  <div {id} class="inputWrapper">
    <svelte:component this={getComponent()} {id} />
    <!-- console.log({type}); -->
    {#if type && type !== 'root'}
      <DeleteButton {id} />
    {/if}
  </div>
  {#if blockIncludeBtns.hasOwnProperty(type) || type === undefined}
    <AddButton addToId={id} />
  {/if}

  {#each children as child}
    <svelte:self {...child} indent={indent + 1} />
  {/each}
</div>

<style>
  .blockWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.25rem 0;
    gap: 0.25rem;
    /* justify-content: space-between; */
  }
  .inputWrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  /* configure all child component inputs below */
  .inputWrapper :global(div) {
    display: flex;
    flex-direction: row;
    justify-self: start;
    width: 90%;
    position: relative;
  }
  .inputWrapper :global(label) {
    position: absolute;
    left: 0.25rem;
    top: 0.5rem;
    transform-origin: left top;
    transition: transform 100ms ease-in-out;
    color: var(--text-mid);
  }

  .inputWrapper :global(input) {
    width: 100%;
    font-size: 1rem;
    height: 1.5rem;
    padding: 0.5rem 0 0 0.25rem;
    border: none;
    border-bottom: 1px solid var(--shadow);
    background-color: transparent;
  }
  .inputWrapper :global(select) {
    width: auto;
    height: 2.5rem;
    padding-right: 1rem;
    font-size: 1rem;
    border: none;
    background-color: transparent;
  }
  .inputWrapper :global(input:focus + label),
  .inputWrapper :global(input:valid + label) {
    transform: translateY(-50%) scale(0.7);
    color: var(--text-mid);
  }

  .inputWrapper :global(select:focus + label),
  .inputWrapper :global(select:valid + label) {
    transform: translateY(-50%) scale(0.7);
    color: var(--text-mid);
  }

  .inputWrapper :global(input:focus + label),
  .inputWrapper :global(select:focus + label) {
    color: var(--primary);
  }

  .inputWrapper :global(input:focus),
  .inputWrapper :global(select:focus) {
    outline: none;
  }
</style>
