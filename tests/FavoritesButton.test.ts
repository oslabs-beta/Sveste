import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, beforeEach, expect, it } from 'vitest';
import FavoritesButton from '../src/components/FavoritesButton.svelte';

describe(`"Favorites" button`, async () => {
  it('renders a button', () => {
    let view = render(FavoritesButton);
    expect(() => screen.getByRole('button')).not.toThrow();
  });
  it('renders a button with text', () => {
    let view = render(FavoritesButton);
    screen.getByRole('button').innerHTML = 'test';
    expect(() => screen.getByText('test')).not.toThrow();
  });
  describe('when clicked', async () => {
    it("doesn't throw an error", async () => {
      let view = render(FavoritesButton);
      const user = userEvent.setup();
      expect(async () => {
        await user.click(screen.getByRole('button'));
      }).not.toThrow();
    });
  });
});
