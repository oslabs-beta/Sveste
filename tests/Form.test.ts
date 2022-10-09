import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import Form from "../src/components/Form.svelte";

describe("add form", () => {
  it("renders a block"),
    () => {
      let view = render(Form);
      expect(() => screen.getByRole("Block")).not.toThrow();
    };
});
