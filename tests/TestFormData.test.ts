import { render, screen, fireEvent } from "@testing-library/svelte";
import { beforeEach, describe, expect, it } from "vitest";
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
import TestFormData from "../src/components/TestFormData.svelte";

describe("TestFormData component", () => {
  let subject: HTMLElement;
  beforeEach(async () => {
    const { container } = await render(TestFormData);
    subject = await container.querySelector("form");
  });

  it("renders a form", () => {
    expect(screen.findByRole("form")).toBeTruthy();
  });

  describe("if form data is valid", () => {
    beforeEach(async () => {
      const inputs = await subject.querySelectorAll("input");
      inputs.forEach((input) => {
        fireEvent.input(input, { target: { value: "this is a test" } });
      });
    });
    it("renders values", async () => {});
    it("send's input values to server on click", () => {});
    it("receives a 200 response", () => {});
  });

  describe("if form data is invalid", () => {
    it("doesn't submit data when invalid", () => {});
  });
});
