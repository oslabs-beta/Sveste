<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let text: string;

  const dispatch = createEventDispatcher<{ copy: string; fail: never }>();

  const copy = () => {
    navigator.clipboard.writeText(text).then(
      () => dispatch("copy", text),
      (e) => dispatch("fail")
    );
  };
</script>

<slot {copy} />
