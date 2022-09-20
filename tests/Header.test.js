import { render, screen } from "@testing-library/svelte";
import Header from "../src/components/Header.svelte";
import { expect, test } from "vitest";

test("Header renders", () => {
  const { container } = render(Header, {
    target: document.querySelector("body"),
  });
  expect(container).toBeTruthy();
});

test("Header contains name of component", () => {
  const { container } = render(Header, {
    target: document.querySelector("body"),
  });
  const header = screen.getByRole("heading");
  expect(header.innerHTML).toBe("Sveste");
});
