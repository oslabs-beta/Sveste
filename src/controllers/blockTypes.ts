import DescribeStatement from "../components/statements/describeStatement.svelte";
import Mock from "../components/form/Mock.svelte";
import MockStatement from "../components/form/MockStatement.svelte";
import RenderBlock from "../components/blocks/RenderBlock.svelte";
import Query from "../components/form/Query.svelte";
import TestStatement from "../components/statements/TestStatement.svelte";
import Expect from "../components/form/Expect.svelte";
import Assertion from "../components/form/Assertion.svelte";
import ActionBlock from "../components/blocks/ActionBlock.svelte";

type TypeComponentPair = { type: string; component: any };
type BlockRef = TypeComponentPair[];

export const blockRef: BlockRef = [
  { type: "describeStatement", component: DescribeStatement },
  { type: "mock", component: Mock },
  { type: "mockStatement", component: MockStatement },
  { type: "renderBlock", component: RenderBlock },
  { type: "query", component: Query },
  { type: "testStatement", component: TestStatement },
  { type: "expect", component: Expect },
  { type: "assertion", component: Assertion },
  { type: "actionBlock", component: ActionBlock },
];
