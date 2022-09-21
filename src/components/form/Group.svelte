<script lang="ts">
  export let id;
  import Event from "./Event.svelte";
  import Assertation from "./Assertation.svelte";

  // let events = [];
  let assertations = [];
  // let eid = 0;
  let aid = 0;
  let addOptions = ["Event", "Mock", "Assertation", "Query"];
  function handleChange(type) {
    // if(type.target.value === 'Event') {
    //     console.log('creating event')
    //     const newEvent = {
    //         id: 'E1'
    //     }
    //     // const id = eid++
    //     newEvent.id = `E${eid++}`
    //     events = [...events, newEvent];
    // }
    if (type.target.value === "Assertation") {
      const newAssertation = {
        id: "A1",
      };
      newAssertation.id = `A${aid++}`;
      assertations = [...assertations, newAssertation];
    }
  }
</script>

<div {id} class="group">
  <label for="describe">
    describe...<input type="text" name="describe" /></label
  >
  <select placeholder="Add" on:change={(value) => handleChange(value)}>
    <option value="" disabled selected>Add</option>
    {#each addOptions as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  <!-- {#each events as event (event.id)}
<Event id={event.id}/>
{/each} -->
  {#each assertations as assertation (assertation.id)}
    <Assertation id={assertation.id} />
  {/each}
</div>
