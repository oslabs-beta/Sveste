<script lang="ts">
  import App from "../App.svelte";
  import CodeDisplay from "../components/CodeDisplay.svelte";
  import FormDisplay from "../components/FormDisplay.svelte";
  import Header from "../components/Header.svelte";
</script>

<App>
  <Header />
  <main>
    <FormDisplay />
    <CodeDisplay />
  </main>
</App>

<style>
  main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    margin: auto;
    max-width: 100%;
    height: 100%;
    gap: 1rem;
  }
</style>
