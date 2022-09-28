<script lang="ts">
  //import App from "../App.svelte";
  import CodeDisplay from "../components/CodeDisplay.svelte";
  import FormDisplay from "../components/FormDisplay.svelte";
  import Header from "../components/Header.svelte";
  import { push } from "svelte-spa-router";
</script>

<main>
  <Header />
  <FormDisplay />
  <CodeDisplay />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 800px;
    height: 100%;
    gap: 1rem;
  }
</style>
