<script lang="ts">
  import { POST } from "../controllers/submitForm";
  let htmlTag = "body";

  function handleSubmit() {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    const testParam = new URLSearchParams();
    const testBody = {};
    for (const [key, value] of formData) {
      if (key === "htmlTag" && typeof value === "string") {
        testParam.append(key, value);
      } else {
        testBody[key] = value;
      }
    }
    let response = POST("/test?" + testParam, JSON.stringify(testBody));
  }
</script>

<form class="form-container" on:submit|preventDefault={handleSubmit}>
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
