<script>
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
  import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
  import { compiledTestStore } from '../compiledTestStore';
  import { testStore, blockStore } from '../models/store';
  import { processTestBlob } from '../controllers/testCompile';

  ///////----- Functionality to reload Prism on Change!!!!!!!!!----------///
  //when mounted on on store change prism reruns on only the element <code>
  let loaded = false;

  onMount(() => (loaded = true));
  $: html = Prism.highlight(
    $compiledTestStore,
    Prism.languages.javascript,
    'javascript'
  );
  $: if ($blockStore && $testStore['children']) createTest();
  $: if (loaded && $compiledTestStore) handleChange();
  $: $blockStore && console.log('updated block store');
  function handleChange() {
    const block = document.getElementById('code');
    Prism.highlightElement(block);
  }

  function createTest() {
    let parsedBody = JSON.stringify($testStore, [
      'id',
      'type',
      'parentId',
      'value',
      'children',
    ]);
    let nonparsed = JSON.parse(parsedBody);
    compiledTestStore.set(processTestBlob(nonparsed));
  }
  //////-----------------------------------//////////
</script>

<pre class="line-numbers">
  <code id="code" class="language-javascript">
  
    {$compiledTestStore}
  </code>
</pre>

<style>
  @import 'prismjs';

  pre {
    height: 100%;
    max-width: 100%;
    padding: 0;
  }
  pre.line-numbers {
    padding: 1vh 1rem 1vh 2rem;
    color: var(--text);
  }
  pre:global([class*='language-']) {
    background: none;
    margin-top: 0;
    padding-top: 0;
    font-size: clamp(12px, 2vw, 16px);
  }
</style>
