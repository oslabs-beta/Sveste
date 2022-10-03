import DescribeStatement from "../components/statements/describeStatement.svelte";
import RenderBlock from "../components/blocks/renderBlock.svelte";
import ExecutionBlock from "../components/blocks/executionBlock.svelte";
import TestStatement from "../components/statements/testStatement.svelte";
import ModifierBlock from "../components/blocks/modifierBlock.svelte";

type TypeComponentPair = { type: string; component: any };
type BlockRef = TypeComponentPair[];

export const blockRef: BlockRef = [
  { type: "describeStatement", component: DescribeStatement },
  { type: "modifierBlock", component: ModifierBlock },
  { type: "renderBlock", component: RenderBlock },
  { type: "testStatement", component: TestStatement },
  { type: "executionBlock", component: ExecutionBlock },
];
