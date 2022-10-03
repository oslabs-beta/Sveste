import DescribeStatement from "../components/statements/describeStatement.svelte";
import Mock from "../components/form/Mock.svelte";
import MockStatement from "../components/form/MockStatement.svelte";
import Render from "../components/form/Render.svelte";
import Query from "../components/form/Query.svelte";
import Test from "../components/form/Test.svelte";
import Assertion from "../components/form/Assertion.svelte";
import UserEvent from "../components/form/UserEvent.svelte";
import ExecutionBlock from "../components/blocks/executionBlock.svelte";

type TypeComponentPair = { type: string; component: any };
type BlockRef = TypeComponentPair[];

export const blockRef: BlockRef = [
  { type: "describeStatement", component: DescribeStatement },
  { type: "mock", component: Mock },
  { type: "mockStatement", component: MockStatement },
  { type: "render", component: Render },
  { type: "query", component: Query },
  { type: "testStatement", component: Test },
  { type: "executionBlock", component: ExecutionBlock },
  { type: "assertion", component: Assertion },
  { type: "event", component: UserEvent },
];
