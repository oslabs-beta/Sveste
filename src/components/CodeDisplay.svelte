<script lang="ts">
  import CodeBlock from "./CodeBlock.svelte";
  import { compiledTestStore } from "../compiledTestStore";
</script>

<!-- key reloads the code block component on store change !important -->
{#key $compiledTestStore}
  <div>
    <CodeBlock />
  </div>
{/key}

<style>
  div {
    grid-area: code;
  }
</style>
