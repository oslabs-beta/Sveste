<script lang="ts">
  import Header from '../components/Header.svelte';
  import NavDisplay from '../components/NavDisplay.svelte';
  import InputDisplay from '../components/InputDisplay.svelte';
  import OutputDisplay from '../components/OutputDisplay.svelte';

  let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div>
  <Header />
  <NavDisplay {screenWidth} />
  <InputDisplay />
  <OutputDisplay />
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 15rem 2fr 2fr;
    grid-template-rows: 65px 1fr;
    grid-template-areas:
      'header   header    header'
      'nav      input     output';
    max-width: 100%;
    height: 100%;
    min-width: 0;
  }

  @media screen and (max-width: 1200px) {
    div {
      grid-template-columns: 1fr;
      grid-template-rows: 65px auto minmax(0, 50vh) minmax(0, 50vh);
      grid-template-areas:
        'header'
        'nav'
        'input'
        'output';
    }
  }
</style>
