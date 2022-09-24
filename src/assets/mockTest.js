// <pre type="code">
//   import { render, screen, fireEvent } from "@testing-library/svelte";
//   import { beforeEach, describe, expect, it } from "vitest";
//   import HelloWorld from "../your/relative/path.svelte";

//   describe("header component", () => {
//     beforeEach(async() => {
//       const { container } = render(HelloWorld);
//       let subject = await screen.getByRole('h2');
//     });

//     it('renders "Hello World"', () => {
//       expect(screen.getByRole('h2')).toContain('Hello World');
//     })
//   })
// </pre>

// access store as $testStore

const root = {
  id: "root0",
  type: "root",
  parent: null,
  value: null,
  children: [],
};

const describe0 = {
  id: "describe0",
  type: "describe",
  parent: "root0",
  value: "header component",
  children: [],
};

const mock0 = {
  id: "mock0",
  type: "mock",
  parent: "describe0",
  value: "beforeEach",
  children: [],
};

const renderedComponent0 = {
  id: "renderedComponent0",
  type: "renderedComponent",
  parent: "mock0",
  value: "HelloWorld",
  children: [],
};

const queryStatement0 = {
  id: "queryStatement0",
  type: "queryStatement",
  parent: "mock0",
  value: "screen.getByRole('h2')",
  children: [],
};

const test0 = {
  id: "test0",
  type: "test",
  parent: "describe0",
  value: 'renders "Hello World"',
  children: [],
};

const expect0 = {
  id: "expect0",
  type: "expect",
  parent: "test0",
  value: ".toContain('Hello World')",
  children: [],
};

const test = root;
test.children.push(describe0);
//DESCRIBE CHILDREN
test.children[0].children.push(mock0, test0);
// MOCK CHILDREN
test.children[0].children[0].children.push(renderedComponent0, queryStatement0);
// TEST CHILDREN
test.children[0].children[1].children.push(expect0);

export const testBody = JSON.stringify(test);
