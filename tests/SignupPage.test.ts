import { render, screen } from "@testing-library/svelte";
import { describe, beforeEach, expect, it } from "vitest";
import SignupPage from "src/pages/SignupPage.svelte";

describe("Signup page", () => {
  it("Renders a Signup form", () => {
    const view = render(SignupPage);
    expect(() => screen.findByRole("form")).not.toThrow();
  });
  it("Renders a Signup button", () => {
    const view = render(SignupPage);
    expect(() => screen.findByText("Sign Up")).not.toThrow();
  });
  it("Renders a Login button", () => {
    const view = render(SignupPage);
    expect(() => screen.findByText("Login")).not.toThrow();
  });
});
