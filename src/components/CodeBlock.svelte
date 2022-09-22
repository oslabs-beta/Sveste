<script>
  // import { onMount } from "svelte/types/runtime/internal/lifecycle";
  import { onMount } from "svelte";
  import { Prism } from "../assets/prism";
  import { compiledTestStore } from "../compiledTestStore";

  ///////----- Functionality to reload Prism on Change!!!!!!!!!----------///
  //when mounted on on store change prism reruns on only the element <code>
  let loaded = false;
  onMount(() => (loaded = true));

  $: if (loaded && $compiledTestStore) handleChange();

  function handleChange() {
    const block = document.getElementById("code");
    Prism.highlightElement(block);
  }
  //////-----------------------------------//////////
</script>

<pre>
  <code id="code" class="language-typescript">
    {$compiledTestStore}
  </code>
</pre>

<style>
  @import "../assets/prism.css";
</style>
