import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import Header from "../src/components/Header.svelte";

describe("site header", () => {
  beforeEach(async () => {
    const view = await render(Header);
    screen.getByRole("heading").innerHTML = "Test";
  });

  it("renders a heading", () => {
    expect(() => screen.getByRole("heading")).not.toThrow();
  });

  it("renders expected text", () => {
    expect(() => screen.getByText("Test")).not.toThrow();
  });
});
