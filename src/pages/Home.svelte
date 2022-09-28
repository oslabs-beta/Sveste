<script lang="ts">
  //import App from "../App.svelte";
  import CodeDisplay from "../components/CodeDisplay.svelte";
  import FormDisplay from "../components/FormDisplay.svelte";
  import Header from "../components/Header.svelte";
  import { push } from "svelte-spa-router";
  import cookieParser from "cookie-parser";
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
    height: 100%;
    gap: 1rem;
  }
</style>
