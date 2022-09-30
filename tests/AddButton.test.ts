import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { describe, beforeEach, expect, it } from "vitest";
import AddButton from "../src/components/form/AddButton.svelte";

describe(`"add" button`, () => {
  beforeEach(() => {
    let view = render(AddButton);
    screen.getByRole("button").innerHTML = "test";
  });

  it("renders a button", () => {
    expect(() => screen.getByRole("button")).not.toThrow();
  });
  it("renders a button with text", () => {
    expect(() => screen.getByText("test")).not.toThrow();
  });

  describe("when clicked", () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole("button"));
    });

    it("renders a menu", () => {
      expect(() => screen.getByRole("list")).not.toThrow();
    });
  });
});
