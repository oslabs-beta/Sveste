<script lang="ts">
  export let id;
  import Event from "./Event.svelte";
  let eid = 0;
  let events = [];
  let addOptions = ["Event", "Query"];
  function handleChange(type) {
    if (type.target.value === "Event") {
      console.log("creating event");
      const newEvent = {
        id: "E1",
      };
      newEvent.id = `E${eid++}`;
      events = [...events, newEvent];
      type = null;
    }
  }
</script>

<div class="assertation">
  <h4>Assertation</h4>
  <select on:change={(value) => handleChange(value)}>
    <option value="" disabled selected>Add</option>
    {#each addOptions as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <label {id}>expect(<input type="text" placeholder="renders..." />)</label>

  {#each events as event (event.id)}
    <Event id={event.id} />
  {/each}
</div>
