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
    /* margin-top: 15rem; */
    min-height: 5rem;
    width: 100%;
    background-color: var(--svestedarkteal);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid var(--svelte);
    /* border-bottom: 3px solid var(--svelte); */
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
