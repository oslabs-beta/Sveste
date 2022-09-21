<script lang="ts">
  import Group from "./form/Group.svelte";
  import { testStore } from "../store";
  import test from "node:test";
  // HTTP Request/Response Logic Here
  //handles button logic
  let groups = [];
  let gid = 0;
  function addGroup() {
    console.log("in add group");
    const newGroup = {
      id: "G1",
    };
    const id = gid++;
    newGroup.id = `G${id}`;
    // groups.push(newGroup)

    groups = [...groups, newGroup];
    // add newGroup to Store
    $testStore[newGroup.id] = newGroup;
    console.log($testStore);
  }
  function deleteGroup(group) {
    groups = groups.filter((g) => g !== group);
  }
</script>

<!-- in each section, a "addComponent button" -->
<!-- Button would have conditional logic defining what user can add based on parents  -->
<!-- ButtonHandler would use DOM manipulation to add right component to right part of the template -->

<!-- Imports -->
<!-- Default testing packages -->
<!-- User specified components -->

<!-- Groups (eg. describe('a thing')) -->
<form>
  {#each groups as group (group.id)}
    <Group id={group.id} />
    <button on:click|preventDefault={() => deleteGroup(group)}
      >Delete Group</button
    >
  {/each}
  <button on:click|preventDefault={addGroup}>Add Group</button>

  <!-- <Group>
  <MockData>
    <JsStatement>
      {var = 'value'}
    </JsStatement>
  </MockData>
  <
</Group>
<Group>
  <MockData>
    <JsStatement>
      {var = 'value'}
    </JsStatement>
  </MockData>
  <
</Group> -->
</form>
<!-- Mock Data (eg. input = 'string') -->

<!-- Events (eg. user.types(words)) -->

<!-- Assertions (eg. it('description, () => expect(a thing).tobe(a thing))) -->
<!-- Description (eg. it('renders...' () => {...})) -->
<!-- Expectation (eg. expect(a thing))-->

<!-- Primitives-->
<!-- JS variables -->
<!-- User component/method -->
<!-- Queries (eg. variable.getByText('string'))-->
<!-- Test subject (special variable- defines what your UNIT is) -->

<!-- Rules -->
<!-- Only one test subject per Group -->

<style>
</style>
