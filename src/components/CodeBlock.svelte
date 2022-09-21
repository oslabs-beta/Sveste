<script>
  import { Prism } from "../assets/prism";
  let mockData = `
      import { render, screen, fireEvent } from "@testing-library/svelte";
      import { beforeEach, describe, expect, it } from "vitest";
      import HelloWorld from "../your/relative/path.svelte";
      
      describe("header component", () => {
        
        let subject: HTMLElement;
        async() => {
          const { container } = render(HelloWorld);
          subject = await container.querySelector('h1');
        };
      
        it('renders "Hello World"', () => {
          expect(screen.getByRole('heading')).toContain('Hello World');
        })
      })
  `;
</script>

<pre>
  <code class="language-typescript">
    {mockData}
  </code>
</pre>

<style>
  @import "../assets/prism.css";
</style>
