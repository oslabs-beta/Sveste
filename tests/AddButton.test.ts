import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { describe, beforeEach, expect, it } from 'vitest';
import AddButton from '../src/components/form/AddButton.svelte';

describe(`"add" button`, () => {
  it('renders a button', () => {
    let view = render(AddButton);
    expect(() => screen.getByRole('button')).not.toThrow();
  });
  it('renders a button with text', () => {
    let view = render(AddButton);
    screen.getByRole('button').innerHTML = 'test';
    expect(() => screen.getByText('test')).not.toThrow();
  });
  describe('when clicked', () => {
    it('renders a menu', async () => {
      let view = render(AddButton);
      const user = userEvent.setup();
      await user.click(screen.getByRole('button'));
      expect(() => screen.getByRole('list')).not.toThrow();
    });
  });
});
