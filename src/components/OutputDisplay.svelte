<script lang="ts">
  import CodeBlock from "./CodeBlock.svelte";
  import { compiledTestStore } from "../compiledTestStore";
</script>

<!-- key reloads the code block component on store change !important -->
<div>
  {#key $compiledTestStore}
    <CodeBlock />
  {/key}
</div>

<style>
  div {
    display: grid;
    /* border: 1px solid black; */
    z-index: -2;
  }
</style>
