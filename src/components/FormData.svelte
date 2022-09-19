<script>
  import { POST } from "../controllers/submitForm";
  let selected;
  let options = ["Render", "Event"];
  function handleSubmit(event) {
    const formData = new FormData(event.target);
    const testParam = new URLSearchParams();
    testParam.append("testType", selected);
    const testBody = {};
    for (const [key, value] of formData) {
      testBody[key] = value;
    }

    let response = POST("/test?" + testParam, JSON.stringify(testBody));
  }
</script>

<form
  class="form-container"
  on:submit|preventDefault={(event) => handleSubmit(event)}
>
  <label for="componentName">Component Name:</label>
  <input required type="text" name="componentName" placeholder="Header" />

  <label for="relativePath">Relative Path:</label>
  <input required type="text" name="relativePath" placeholder="/tests" />

  <label for="testName">Test Name:</label>
  <input required type="text" name="testName" placeholder="Header rendered" />

  <label for="expectedResult">Expected Result:</label>
  <input required type="text" name="expectedResult" placeholder="Hello World" />
  <input type="submit" value="Submit" />
</form>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
  }
</style>
