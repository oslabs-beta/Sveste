import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import InputDisplay from "src/components/InputDisplay.svelte";
import InfoDisplay from "src/components/InfoDisplay.svelte";
// import InfoDisplay from "src/components/InfoDisplay.svelte";

describe("InputDisplay", async () => {
  beforeEach(() => {
    const view = render(InputDisplay);
  });
  it("renders an infodisplay", () => {
    expect(() => {
      screen.getByText("info");
    }).not.toThrow();
  });
  it("renders a form", () => {
    expect(() => {
      screen.findByRole("form");
    }).not.toThrow();
  });
});
