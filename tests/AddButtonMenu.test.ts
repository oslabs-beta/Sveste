import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import AddButtonMenu from "src/components/form/AddButtonMenu.svelte";
//import { testStore, blockStore } from "../src/models/store";
import addBlock from "src/components/form/AddButtonMenu.svelte";

describe("Add Button Menu", () => {
  beforeEach(() => {
    let view = render(AddButtonMenu);
    screen.getByRole("button").innerHTML = "test";
  });
  //test for button if there is a root block
  it("renders a button after root"),
    () => {
      expect(() => screen.getByRole("button")).not.toThrow();
    };
  it("renders a button with text", () => {
    expect(() => screen.getByText("test")).not.toThrow();
  });

  describe("when clicked", () => {
    beforeEach(async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole("button"));
    });
    // test add block functionality
    //might have to mock the function to test
    it("Should add a block", () => {
      expect(addBlock).toBeDefined;
    });
  });
});
