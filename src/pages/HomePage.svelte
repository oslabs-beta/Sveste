<script lang="ts">
  import Header from "../components/Header.svelte";
  import Nav from "../components/Nav.svelte";
  import InputDisplay from "../components/InputDisplay.svelte";
  import OutputDisplay from "../components/OutputDisplay.svelte";

  let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div>
  <Header />
  <Nav {screenWidth} />
  <InputDisplay />
  <OutputDisplay />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 2fr 2fr;
    grid-template-rows: 65px 1fr;
    grid-template-areas:
      "header   header    header"
      "nav      input     output";
    width: 100%;
    height: 100%;
    gap: 1rem;
  }

  @media screen and (max-width: 920px) {
    div {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 65px auto 1fr;
      grid-template-areas:
        "header   header"
        "nav      nav"
        "input    output";
    }
  }

  @media screen and (max-width: 680px) {
    div {
      grid-template-columns: 1fr;
      grid-template-rows: 65px auto 1fr 1fr;
      grid-template-areas:
        "header"
        "nav"
        "input"
        "output";
    }
  }
</style>
