import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import CodeBlock from "src/components/CodeBlock.svelte";

describe("CodeBlock", () => {
  it("renders a token operator", () => {
    const view = render(CodeBlock);
    expect(() => {
      screen.getByText("...");
    }).not.toThrow();
  });
});
