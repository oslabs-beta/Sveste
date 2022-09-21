<script lang="ts">
  export let id;
  import ItStatement from "./ItStatement.svelte";
  import DescribeBlock from "./DescribeBlock.svelte";
  let addOptions = ["Mock", "Statement"];
  let statements = [];
  let sid = 0;
  function handleChange(type) {
    if (type.target.value === "Statement") {
      console.log("creating event");
      const newStatement = {
        id: "S1",
      };
      // const id = eid++
      newStatement.id = `S${sid++}`;
      statements = [...statements, newStatement];
    }
  }
</script>

<div {id} class="group">
  <DescribeBlock />
  <select placeholder="Add" on:change={(value) => handleChange(value)}>
    <option value="" disabled selected>Add</option>
    {#each addOptions as value}
      <option {value}>
        {value}
      </option>
    {/each}
  </select>
  {#each statements as statement (statement.id)}
    <ItStatement id={statement.id} />
  {/each}
</div>
