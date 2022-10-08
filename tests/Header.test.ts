import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import Header from "../src/components/Header.svelte";

describe("site header", () => {
  it("renders a heading", () => {
    const view = render(Header);
    expect(() => screen.getByRole("heading")).not.toThrow();
  });

  it("renders expected text", () => {
    const view = render(Header);
    screen.getByRole("heading").innerHTML = "Test";
    expect(() => screen.getByText("Test")).not.toThrow();
  });
});
