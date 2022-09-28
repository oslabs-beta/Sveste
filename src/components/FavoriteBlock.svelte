<script>
  export let fav;
  import Prism from "prismjs";

  function handleChange(codeBlock) {
    const block = codeBlock;
    Prism.highlightElement(block);
  }
</script>

<pre>
    <code use:handleChange id="code" class="language-javascript">
      {fav}
    </code>
  </pre>

<style>
  @import "prismjs";
  pre {
    margin-left: 2em;
    margin-top: 2em;
  }
</style>
