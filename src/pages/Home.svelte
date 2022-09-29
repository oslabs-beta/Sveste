<script lang="ts">
  //import App from "../App.svelte";
  import CodeDisplay from "../components/CodeDisplay.svelte";
  import FormDisplay from "../components/FormDisplay.svelte";
  import InfoDisplay from "../components/InfoDisplay.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { push } from "svelte-spa-router";
</script>

<Header />

<div class="container">
  <div>
    <InfoDisplay />
    <FormDisplay />
  </div>
  <CodeDisplay />
</div>
<Footer />

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 2fr));
    gap: 4vw;
    padding: 2vh 4vw;
  }
</style>
