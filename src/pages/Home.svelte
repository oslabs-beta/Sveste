<script lang="ts">
  //import App from "../App.svelte";
  import CodeDisplay from "../components/CodeDisplay.svelte";
  import FormDisplay from "../components/FormDisplay.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { push } from "svelte-spa-router";
</script>

<Header />

<div class="container">
  <FormDisplay />
  <CodeDisplay />
</div>
<Footer />

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 2fr));
    gap: 5vw;
    padding: 0 5vw;
  }
</style>
