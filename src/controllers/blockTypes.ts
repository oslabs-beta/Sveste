import Describe from "../components/form/Describe.svelte";
import Mock from "../components/form/Mock.svelte";
import MockStatement from "../components/form/MockStatement.svelte";
import Render from "../components/form/Render.svelte";
import Query from "../components/form/Query.svelte";
import TestStatement from "../components/statements/TestStatement.svelte";
import Expect from "../components/form/Expect.svelte";
import Assertion from "../components/form/Assertion.svelte";
import UserEvent from "../components/form/UserEvent.svelte";

type TypeComponentPair = { type: string; component: any };
type BlockRef = TypeComponentPair[];

export const blockRef: BlockRef = [
  { type: "describe", component: Describe },
  { type: "mock", component: Mock },
  { type: "mockStatement", component: MockStatement },
  { type: "render", component: Render },
  { type: "query", component: Query },
  { type: "testStatement", component: TestStatement },
  { type: "expect", component: Expect },
  { type: "assertion", component: Assertion },
  { type: "event", component: UserEvent },
];
