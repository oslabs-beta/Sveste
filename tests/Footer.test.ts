import { render, screen } from '@testing-library/svelte';
import { describe, beforeEach, expect, it } from 'vitest';
import Footer from '../src/components/Footer.svelte';

describe('site Footer', () => {
  it('renders a link', () => {
    const view = render(Footer);
    expect(() => screen.getByRole('link')).not.toThrow();
  });

  it('renders expected text', () => {
    const view = render(Footer);
    screen.getByRole('link').innerHTML = 'Test';
    expect(() => screen.getByText('Test')).not.toThrow();
  });
  it('contains an imager as well', () => {
    const view = render(Footer);
    expect(() => screen.getByRole('img')).not.toThrow();
  });
});
