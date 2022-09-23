<script lang="ts">
  import AddButton from "../components/form/AddButton.svelte";
  import DeleteButton from "../components/form/DeleteButton.svelte";
  import Block from "./form/Block.svelte";
  import { testStore } from "../models/store";
</script>

<form>
  <div class="level1">
    {#if $testStore["children"]}
      {#each $testStore["children"] as block1}
        <Block id={block1.id} type={block1.type} value={block1.value} />
        <AddButton addToId={block1.id} />
        <div class="level2">
          {#if block1["children"].length > 0}
            {#each block1["children"] as block2}
              <Block id={block2.id} type={block2.type} value={block2.value} />
              <AddButton addToId={block2.id} />
              <div class="level3">
                {#if block2["children"].length > 0}
                  {#each block2["children"] as block3}
                    <Block
                      id={block3.id}
                      type={block3.type}
                      value={block3.value}
                    />
                  {/each}
                {/if}
                <AddButton addToId={block2.id} />
              </div>
            {/each}
          {/if}
          <AddButton addToId={block1.id} />
        </div>
      {/each}
    {/if}
    <AddButton addToId="root0" />
  </div>
</form>

<style>
  .level1 {
    margin-left: 1rem;
  }
  .level2 {
    margin-left: 2rem;
  }
  .level3 {
    margin-left: 3rem;
  }
</style>
