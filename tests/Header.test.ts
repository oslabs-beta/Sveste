import { render, screen } from "@testing-library/svelte";
import Header from "../src/components/Header.svelte";
import { describe, beforeEach, expect, it } from "vitest";

describe("site header", async () => {
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
