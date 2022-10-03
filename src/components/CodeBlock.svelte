<script>
  import { onMount } from "svelte";
  import Prism from "prismjs";
  import { compiledTestStore } from "../compiledTestStore";
  import { testStore, blockStore } from "../models/store";
  import { processTestBlob } from "../controllers/testCompile";

  ///////----- Functionality to reload Prism on Change!!!!!!!!!----------///
  //when mounted on on store change prism reruns on only the element <code>
  let loaded = false;

  onMount(() => (loaded = true));
  $: html = Prism.highlight(
    $compiledTestStore,
    Prism.languages.javascript,
    "javascript"
  );
  $: if ($blockStore && $testStore["children"]) createTest();
  $: if (loaded && $compiledTestStore) handleChange();
  $: $blockStore && console.log("updated block store");
  function handleChange() {
    const block = document.getElementById("code");
    Prism.highlightElement(block);
  }

  function createTest() {
    let parsedBody = JSON.stringify($testStore, [
      "id",
      "type",
      "parentId",
      "value",
      "children",
    ]);
    let nonparsed = JSON.parse(parsedBody);
    compiledTestStore.set(processTestBlob(nonparsed));
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
    height: 100%;
    max-width: 100%;
    /* white-space: pre-wrap; */
  }
  pre:global([class*="language-"]) {
    background: none;
    margin-top: 0;
    padding-top: 0;
    word-wrap: normal;
    font-size: 0.9rem;
  }
</style>
