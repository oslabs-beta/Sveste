<script lang="ts">
  //import App from "../App.svelte";
  import CodeDisplay from "../components/CodeDisplay.svelte";
  import FormDisplay from "../components/FormDisplay.svelte";
  import { push } from "svelte-spa-router";
  import cookieParser from "cookie-parser";
</script>

<!-- <App> -->
<main>
  <!-- <button
    on:click|preventDefault={() => {
      console.log(document);
    }}>Cookies</button
  >
  <button
    on:click|preventDefault={() => {
      push("/login");
    }}>Sign Out</button
  > -->
  <FormDisplay />
  <CodeDisplay />
  <p>test</p>
</main>
<!-- <Login /> -->
<!-- </App> -->

<!-- <App> -->
  <!-- <FormDisplay /> -->
  <!-- <CodeDisplay /> -->
  <!-- <p> test</p> -->
  <!-- <Login /> -->
<!-- </App> -->

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
