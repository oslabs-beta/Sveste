import { render, screen } from '@testing-library/svelte';
import FavoriteBlock from 'src/components/FavoriteBlock.svelte';
import { describe, beforeEach, expect, it } from 'vitest';

describe('Favorite Block', () => {
  it('Renders a button', () => {
    const view = render(FavoriteBlock);
    expect(() => screen.getByRole('button')).not.toThrow();
  });
  it('Can handle change', () => {
    const view = render(FavoriteBlock);
    expect(FavoriteBlock.prototype.handleChange).toBeDefined;
  });
});
