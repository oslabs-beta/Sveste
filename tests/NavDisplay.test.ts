import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import NavDisplay from "src/components/NavDisplay.svelte";
import userEvent from "@testing-library/user-event";

describe(`"NavDisplay"`, async () => {
  it("Renders with a root heading", async () => {
    const view = render(NavDisplay);
    expect(() => screen.getByText("root")).not.toThrow();
  });
  describe("When root button is clicked", async () => {
    it("Does not throw an error", async () => {
      const view = render(NavDisplay);
      const user = userEvent.setup();
      expect(
        async () => await user.click(screen.getByRole("button"))
      ).not.toThrow();
    });
  });
});
