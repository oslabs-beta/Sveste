<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import { compiledTestStore } from "../compiledTestStore";

  ///////----- Functionality to reload Prism on Change!!!!!!!!!----------///
  //when mounted on on store change prism reruns on only the element <code>
  let loaded = false;

  onMount(() => (loaded = true));
  $: html = Prism.highlight(
    $compiledTestStore,
    Prism.languages.javascript,
    "javascript"
  );

  $: if (loaded && $compiledTestStore) handleChange();

  function handleChange() {
    const block = document.getElementById("code");
    Prism.highlightElement(block);
  }
  //////-----------------------------------//////////
</script>

<pre>
  <code id="code" class="language-javascript">
    {$compiledTestStore}
  </code>
</pre>

<style>
  @import "prismjs";

  pre {
    margin-left: 2em;
    margin-top: 2em;
    border-radius: 10px;
    border: 2px solid var(--primary);
    /* min-width: 500px; */
    height: 90%;
  }
  pre:global([class*="language-"]) {
    background: none;
  }
</style>
