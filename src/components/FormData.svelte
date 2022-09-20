<script lang="ts">
  import { handleFormSubmission } from "../controllers/submitForm";
</script>

<form class="form-container" on:submit|preventDefault={handleFormSubmission}>
  <label for="htmlTag">HTML Tag</label>
  <input required type="text" name="htmlTag" placeholder="h1" />

  <label for="componentName">Component Name</label>
  <input required type="text" name="componentName" placeholder="Header" />

  <label for="relativePath">Relative Path</label>
  <input required type="text" name="relativePath" placeholder="/tests" />

  <label for="testName">Test Name</label>
  <input required type="text" name="testName" placeholder="Header rendered" />

  <label for="expectedResult">Expected Result</label>
  <input required type="text" name="expectedResult" placeholder="Hello World" />
  <button type="submit">Submit</button>
</form>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
  }
</style>
