<script lang="ts">
  import CodeBlock from "./CodeBlock.svelte";
  import { compiledTestStore } from "../compiledTestStore";
  import AddFavoriteButton from "./AddFavoriteButton.svelte";
</script>

<!-- !IMPORTANT: key reloads the code block component on store change  -->
<div>
  <AddFavoriteButton />
  {#key $compiledTestStore}
    <CodeBlock />
  {/key}
</div>

<style>
  div {
    display: grid;
    grid-template-rows: minmax(0, 2rem) 1fr;
    padding: 1vh 1vw;
    margin: 2vh 2vw;
    border-radius: 0.5rem;
    border: 1px solid var(--shadow);
  }
</style>
