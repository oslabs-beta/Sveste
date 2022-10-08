import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import InputDisplay from "src/components/InputDisplay.svelte";
import InfoDisplay from "src/components/InfoDisplay.svelte";
// import InfoDisplay from "src/components/InfoDisplay.svelte";

describe("InputDisplay", async () => {
  it("renders an infodisplay", () => {
    const view = render(InputDisplay);
    expect(() => {
      screen.getByText("info");
    }).not.toThrow();
  });
  it("renders a form", () => {
    const view = render(InputDisplay);
    expect(() => {
      screen.findByRole("form");
    }).not.toThrow();
  });
});
