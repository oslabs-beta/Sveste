import { render, screen, within } from "@testing-library/svelte";
import TestFormData from "../src/components/TestFormData.svelte";
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
import { beforeAll, beforeEach, describe, expect, it, test } from "vitest";
// check if form rendered as expected

describe("TestFormData component", () => {
  let subject: HTMLElement;
  beforeEach(async () => {
    const { container } = await render(TestFormData);
    subject = container.querySelector("form");
  });

  it("renders a form", () => {
    expect(subject).toBeTruthy();
  });

  describe("if form data is valid", () => {
    it("send's data to server on click", () => {});

    it("receives a 200 response", () => {});
  });

  describe("if form data is invalid", () => {
    it("doesn't submit data when invalid", () => {});
  });
});
