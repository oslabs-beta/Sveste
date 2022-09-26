import Describe from "../components/form/Describe.svelte";
import Mock from "../components/form/Mock.svelte";
import MockStatement from "../components/form/MockStatement.svelte";
import Render from "../components/form/Render.svelte";
import Query from "../components/form/Query.svelte";
import Test from "../components/form/Test.svelte";
import Expect from "../components/form/Expect.svelte";
import Assertion from "../components/form/Assertion.svelte";

type TypeComponentPair = { type: string; component: any };
type BlockRef = TypeComponentPair[];

export const blockRef: BlockRef = [
  { type: "describe", component: Describe },
  { type: "mock", component: Mock },
  { type: "mockStatement", component: MockStatement },
  { type: "render", component: Render },
  { type: "query", component: Query },
  { type: "test", component: Test },
  { type: "expect", component: Expect },
  { type: "assertion", component: Assertion },
];
