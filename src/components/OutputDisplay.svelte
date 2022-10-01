<script lang="ts">
  import CodeBlock from "./CodeBlock.svelte";
  import { compiledTestStore } from "../compiledTestStore";
  import AddFavoriteButton from "./AddFavoriteButton.svelte";
</script>

<!-- key reloads the code block component on store change !important -->
<div class="code-display">
  <div class="button-wrapper">
    <AddFavoriteButton />
  </div>

  {#key $compiledTestStore}
    <div class="codeWrapper">
      <CodeBlock />
    </div>
  {/key}
</div>

<style>
  .code-display {
    /* display: grid; */
    grid-template-rows: 0.25fr 8fr;
    border: 1px solid black;
    min-width: 700px;
    height: 100%;
  }
  .codeWrapper {
    padding: 1em;
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 1em;
    height: 90%;
  }
  .button-wrapper {
    display: flex;
    margin-top: 0.5em;
    margin-right: 1em;
    justify-content: flex-end;
    align-items: center;
    padding-top: 1em;
  }
</style>
