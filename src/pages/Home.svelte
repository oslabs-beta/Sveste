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
  <section>
    <InfoDisplay />
    <FormDisplay />
  </section>
  <CodeDisplay />
</div>
<Footer />

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 2fr));
    gap: 4vw;
    padding: 4vh 4vw;
    height: 100%;
    /* max-width: 1200px; */
  }
  section {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    /* justify-content: space-between; */
  }
</style>
