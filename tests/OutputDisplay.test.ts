import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import OutputDisplay from "src/components/OutputDisplay.svelte";
import userEvent from "@testing-library/user-event";

describe("Output Display", () => {
  beforeEach(() => {
    let view = render(OutputDisplay);
  });
  it("Should render a favorites button", async () => {
    //expect for getting the favorites button
    expect(() => {
      screen.getByRole("button");
    }).not.toThrow();
    it("Does not throw an error when clicked", async () => {
      const user = userEvent.setup();
      expect(
        async () => await user.click(screen.getByRole("button"))
      ).not.toThrow();
    });
  });
  it("Should render a CodeBlock", () => {
    expect(() => {
      screen.getByText("...");
    }).not.toThrow();
  });
});
