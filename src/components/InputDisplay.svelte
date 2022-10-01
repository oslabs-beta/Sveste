<script lang="ts">
  import TestFormBrain from "./TestFormBrain.svelte";
  import InfoDisplay from "./InfoDisplay.svelte";
</script>

<div class="input-display">
  <div class="info-wrapper">
    <InfoDisplay />
  </div>
  <div class="form-wrapper">
    <TestFormBrain />
  </div>
</div>

<style>
  .input-display {
    display: grid;
    grid-template-rows: 1fr 6fr;
    /* border: 1px solid black; */
    z-index: -2;
    min-width: 350px;
    height: 100%;
    overflow-y: auto;
    padding: 0 0.5em;
  }
  .form-wrapper {
    /* margin-top: 0px; */
  }
  .info-wrapper {
    margin-top: 2em;
    margin-bottom: 1em;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
</style>
