<script>
  import { Prism } from "../assets/prism";
  import { compiledTestStore } from "../compiledTestStore";
  // let mockData = `
  //     import { render, screen, fireEvent } from "@testing-library/svelte";
  //     import { beforeEach, describe, expect, it } from "vitest";
  //     import HelloWorld from "../your/relative/path.svelte";

  //     describe("header component", () => {

  //       let subject: HTMLElement;
  //       async() => {
  //         const { container } = render(HelloWorld);
  //         subject = await container.querySelector('h1');
  //       };

  //       it('renders "Hello World"', () => {
  //         expect(screen.getByRole('heading')).toContain('Hello World');
  //       })
  //     })
  // `;
  let mockData;
  compiledTestStore.subscribe((value) => {
    mockData = value;
  });
</script>

{#key $compiledTestStore}
  <pre>
  <code class="language-typescript">
    {$compiledTestStore}
  </code>
</pre>
{/key}
<div>
  <button on:click|preventDefault={() => console.log($compiledTestStore)}
    >Click Me</button
  >
</div>

<style>
  @import "../assets/prism.css";
</style>
