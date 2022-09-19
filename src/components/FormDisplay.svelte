<script lang="ts">
  import { POST } from "../controllers/submitForm";
  let selected;
  let options = ["Render", "Event"];
  //req Params - testType: Render
  //req Body
  /**
   * 
   Req Body = {
    componentName: String;
    relativePath: String;
    testName: String;
    expectedResult: String;
   }
   */
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

<div>
  <label
    >Test Type: <select bind:value={selected}>
      {#each options as value}
        <option {value}>{value}</option>
      {/each}
    </select></label
  >
  {#if selected === "Render"}
    <form
      class="form-container"
      on:submit|preventDefault={(event) => handleSubmit(event)}
    >
      <label
        >Component Name: <input
          type="text"
          name="componentName"
          placeholder="ex. paragraph"
        /></label
      >
      <label
        >Relative Path: <input
          type="text"
          name="relativePath"
          placeholder="/tests"
        /></label
      >

      <label
        >Test Name: <input
          name="testName"
          placeholder="shows proper text when rendered..."
        /></label
      >

      <label
        >Expected Result: <input
          name="expectedResult"
          placeholder="Hello World"
        />
      </label>
      <input type="submit" />
    </form>
  {/if}
</div>

<style>
  .form-container {
    display: flex;
    flex-direction: column;
  }
</style>
