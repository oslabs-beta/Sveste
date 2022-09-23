import Describe from "../components/form/Describe.svelte";
import Mock from "../components/form/Mock.svelte";
import Render from "../components/form/Render.svelte";
import Query from "../components/form/Query.svelte";
import Test from "../components/form/Test.svelte";
import Expect from "../components/form/Expect.svelte";

type TypeComponentPair = { type: string; component: any };
type BlockRef = TypeComponentPair[];

export const blockRef: BlockRef = [
  { type: "describe", component: Describe },
  { type: "mock", component: Mock },
  { type: "render", component: Render },
  { type: "query", component: Query },
  { type: "test", component: Test },
  { type: "expect", component: Expect },
];
