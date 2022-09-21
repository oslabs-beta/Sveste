<script lang="ts">
  import Assertation from "./Assertation.svelte";
  import Event from "./Event.svelte";
  import Query from "./Query.svelte";
  export let id;
  let assertations = [];
  let events = [];
  let queries = [];
  let qid = 0;
  let eid = 0;
  let aid = 0;
  let addOptions = ["Event", "Mock", "Assertation", "Query"];
  function handleChange(type) {
    if (type.target.value === "Event") {
      console.log("creating event");
      const newEvent = {
        id: "E1",
      };
      // const id = eid++
      newEvent.id = `E${eid++}`;
      events = [...events, newEvent];
    }
    if (type.target.value === "Assertation") {
      const newAssertation = {
        id: "A1",
      };
      newAssertation.id = `A${aid++}`;
      assertations = [...assertations, newAssertation];
    }
    if (type.target.value === "Query") {
      const newQuery = {
        id: "Q1",
      };
      // const id = eid++
      newQuery.id = `Q${qid++}`;
      queries = [...queries, newQuery];
    }
  }
</script>

<div class="statement">
  <h3>Statement</h3>
  <label for="it"> it(<input type="text" name="it" />)</label>
  <select placeholder="Add" on:change={(value) => handleChange(value)}>
    <option value="" disabled selected>Add</option>
    {#each addOptions as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  {#each assertations as assertation (assertation.id)}
    <Assertation id={assertation.id} />
  {/each}
  {#each events as event (event.id)}
    <Event id={event.id} />
  {/each}
  {#each queries as query (query.id)}
    <Query id={query.id} />
  {/each}
</div>

<style>
  .statement {
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    margin: 1em;
  }
</style>
