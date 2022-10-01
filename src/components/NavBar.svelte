<script lang="ts">
  import NavBlock from "./NavBlock.svelte";
  import { blockStore, testStore } from "../models/store";
  import { children } from "svelte/internal";
  // dummy data for now
  $: $testStore && populateParents();
  const parentArray = [];
  function populateParents() {
    const describeArr = $testStore["children"];
    // console.log(describeArr);
    if (describeArr) {
      describeArr.forEach((describeObj) => {
        const obj = {
          blockType: "parent",
          children: [],
          type: describeObj.type,
        };
        // obj.children.push(processChildren(describeObj));
        parentArray.push(obj);
        console.log(parentArray);
      });
    }
  }
  function processChildren(blockObj, result = []) {
    if (!blockObj) return result;
    const childObj = {};
  }
  function handleClick() {
    // console.log('blockstore', $blockStore);
    console.log("teststore", $testStore["children"]);
  }
</script>

<div>
  <NavBlock
    blockType={"parent"}
    name={$testStore["type"]}
    children={$testStore["children"]}
  />
  <button on:click|preventDefault={() => populateParents()}>Test</button>
</div>
