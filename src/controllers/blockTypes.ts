import DescribeStatement from '../components/statements/describeStatement.svelte';
import Mock from '../components/form/Mock.svelte';
import MockStatement from '../components/form/MockStatement.svelte';
import RenderBlock from '../components/blocks/renderBlock.svelte';
import ModierBlock from '../components/blocks/modifierBlock.svelte';
import Query from '../components/form/Query.svelte';
import Assertion from '../components/form/Assertion.svelte';
import UserEvent from '../components/form/UserEvent.svelte';
import ExecutionBlock from '../components/blocks/executionBlock.svelte';
import TestStatement from '../components/statements/testStatement.svelte';
import ModifierBlock from '../components/blocks/modifierBlock.svelte';

type TypeComponentPair = { type: string; component: any };
type BlockRef = TypeComponentPair[];

export const blockRef: BlockRef = [
  { type: 'describeStatement', component: DescribeStatement },
  { type: 'mock', component: Mock },
  { type: 'modifierBlock', component: ModifierBlock },
  { type: 'renderBlock', component: RenderBlock },
  { type: 'query', component: Query },
  { type: 'testStatement', component: TestStatement },
  { type: 'executionBlock', component: ExecutionBlock },
  { type: 'assertion', component: Assertion },
  { type: 'event', component: UserEvent },
];
