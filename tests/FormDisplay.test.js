import { render } from "@testing-library/svelte";
import FormDisplay from "../src/components/FormDisplay.svelte";
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
import { expect, test } from "vitest";
// check if form rendered as expected
test("FormDisplay renders", () => {
  // const testComp = new FormDisplay({
  //   target: document.querySelector('body'),
  // });
  const { container, component } = render(FormDisplay, {
    target: document.querySelector("body"),
  });

  // expect(container.id).toBe('app');
  expect(container.querySelector(".form-container").className).toContain(
    "form-container"
  );
});
test("testing the test", () => {
  const result = "Hello World";
  expect(result).toEqual("Hello World");
});
// test('for display take 2', () => {
//   const container = render(FormDisplay);
// });

// check if submit fires POST request as expected

// check if response to POST request is as intended
