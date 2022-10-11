<script>
  export let fav;
  import Prism from 'prismjs';
  import { userId } from '../models/store';
  import { favoritesStore } from '../models/favoritesStore';

  function handleChange(codeBlock) {
    const block = codeBlock;
    Prism.highlightElement(block);
  }
  async function handleDelete() {
    try {
      const res = await fetch('/api/favorites', {
        method: 'DELETE',
        body: JSON.stringify({
          id: $userId,
          index: $favoritesStore.indexOf(fav),
        }),
      });
      const data = await res.json();
      if (data) favoritesStore.set([...data]);
      else favoritesStore.set([]);
    } catch (err) {
      console.log(err);
    }
  }
</script>

<pre>
    <code use:handleChange id="code" class="language-javascript">
      {fav}
    </code>
  </pre>
<button on:click|preventDefault={handleDelete}>-</button>

<style>
  @import 'prismjs';
  pre {
    margin-left: 2em;
    margin-top: 2em;
    border-radius: 10px;
    border: 2px solid var(--primary);
  }
  button {
    display: flex;
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    font-size: 1.4rem;
    align-items: center;
    justify-content: center;
    color: var(--highlight);
    border: none;
    background: transparent;
  }
  button:hover {
    background-color: var(--highlight);
    color: white;
  }
</style>
