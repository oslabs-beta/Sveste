<script>
  const src = "src/assets/githubthumbnail.png";
</script>

<footer>
  <a href="https://github.com/oslabs-beta/Sveste"
    ><img {src} alt="GitHub Icon" /> | GitHub</a
  >
</footer>

<style>
  footer {
    margin-top: 15rem;
    margin-bottom: 0.5em;
    height: 5rem;
    background-color: var(--svestedarkteal);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid var(--svelte);
    border-bottom: 3px solid var(--svelte);
  }
  img {
    max-height: 16px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
