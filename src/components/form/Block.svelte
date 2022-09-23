<script>
  import { idStore, testStore } from "../../models/store";
  import { Block } from "../../controllers/blockClass";
  import AddButton from "./AddButton.svelte";
  import DeleteButton from "./DeleteButton.svelte";
  export let id, parentId;
</script>

<p>fun stuff goes here</p>
<AddButton addToId={id} />
<!-- <DeleteButton deleteId={id} deleteFromId={parentId} /> -->
<div />
