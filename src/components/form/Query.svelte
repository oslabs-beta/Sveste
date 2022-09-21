<script lang="ts">
  export let id;
  const queries = [
    "getBy",
    "queryBy",
    "findBy",
    "getAllBy",
    "queryAllBy",
    "findAllBy",
  ];
  const types = ["Role", "Text"];
</script>

<select>
  {#each queries as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<select>
  {#each types as value}
    <option {value}>
      {value}
    </option>
  {/each}
</select>
<label {id}>Matcher: <input type="text" placeholder="ex. button" /></label>
