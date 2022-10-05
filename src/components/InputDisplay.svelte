<script lang="ts">
  import Form from "./Form.svelte";
  import InfoDisplay from "./InfoDisplay.svelte";
</script>

<div class="input-display">
  <div class="info-wrapper">
    <InfoDisplay />
  </div>
  <div class="form-wrapper">
    <Form />
  </div>
</div>

<style>
  .input-display {
    display: grid;
    grid-template-rows: auto 1fr;
    max-height: 90vh;
    padding: 0 2vw;
  }
  .info-wrapper {
    margin-top: 2em;
    margin-bottom: 1em;
  }
  .form-wrapper {
    overflow-y: auto;
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
