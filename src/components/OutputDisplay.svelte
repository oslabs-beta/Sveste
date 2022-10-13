<script>
  import CodeBlock from './CodeBlock.svelte';
  import { compiledTestStore } from '../compiledTestStore';
  import AddFavoriteButton from './AddFavoriteButton.svelte';
  import CopyIcon from './icons/ContentCopy.svelte';

  const copy = () => {
    return navigator.clipboard
      .writeText($compiledTestStore)
      .then(() => alert('Your unit test is copied to the clipboard!'));
  };
</script>

<!-- !IMPORTANT: key reloads the code block component on store change  -->

<div class="code-output">
  <div class="icon-bar">
    <button on:click|preventDefault={copy}><CopyIcon /></button>
    <AddFavoriteButton />
  </div>
  {#key $compiledTestStore}
    <CodeBlock />
  {/key}
</div>

<style>
  .code-output {
    display: grid;
    grid-template-rows: minmax(0, 2rem) 1fr;
    padding: 1vh 1vw;
    margin: 2vh 2vw;
    border-radius: 0.5rem;
    border: 1px solid var(--shadow);
  }
  .icon-bar {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }

  button {
    display: flex;
    width: fit-content;
    justify-self: end;
    align-self: center;
    color: var(--primary);
    background-color: transparent;
    border: none;
    margin-top: 0.2rem;
  }
  button:hover {
    color: var(--highlight);
    cursor: pointer;
  }
</style>
